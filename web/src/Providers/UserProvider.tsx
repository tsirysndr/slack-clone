import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { createContext, FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DO_LOGIN } from '../GraphQL/User/mutation';
import { DO_GET_ALL_USERS } from '../GraphQL/User/query';
import { AllUsers, AllUsers_allUsers } from '../GraphQL/User/types/AllUsers';
import {
  Login,
  LoginVariables,
  Login_login,
} from '../GraphQL/User/types/Login';
import {
  getCurrentUserInfos,
  removeAccessToken,
  removeCurrentUserInfos,
  setAccessToken,
  setCurrentUserInfos,
} from '../LocalStorage';

interface IUserProvider {
  user: Login_login | null;
  handleSignIn: (username: string, password: string) => void;
  handleLogout: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  errorMsg: string | null;
  allUsers?: (AllUsers_allUsers | null)[] | null;
}

export const UserContext = createContext<IUserProvider>({
  user: null,
  handleSignIn: (username: string, password: string) => {},
  handleLogout: () => {},
  loading: false,
  setLoading: () => {},
  errorMsg: null,
  allUsers: null,
});

export const UserProvider: FC = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<Login_login | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<(AllUsers_allUsers | null)[] | null>(null);
  const history = useHistory();
  const [doLogin, { loading: loadingLogin }] = useMutation<
    Login,
    LoginVariables
  >(DO_LOGIN, {
    onCompleted: (data: Login) => {
      if (data && data.login && data.login.token) {
        setErrorMsg(null);
        setAccessToken(data.login.token);
        setCurrentUser(data.login);
        setCurrentUserInfos(data.login);
        history.push('/');
      }
    },
    onError: (error: ApolloError) => {
      setErrorMsg('Invalid username or password');
    },
  });
  const { loading: allUsersLoading } = useQuery<AllUsers>(DO_GET_ALL_USERS, {
    onCompleted: (data: AllUsers) => {
      if (data && data.allUsers) {
        setAllUsers(data.allUsers);
      }
    },
    onError: (error: ApolloError) => {}
  })

  const handleSignIn = async (username: string, password: string) => {
    setLoading(loadingLogin);
    await doLogin({
      variables: {
        username,
        password,
      },
    });
    setLoading(false);
  };
  const handleLogout = () => {
    removeAccessToken();
    removeCurrentUserInfos();
    history.push('/login');
  };

  useEffect(() => {
    const user = getCurrentUserInfos();
    setCurrentUser(user);
    if (user == null) {
      history.push('/login');
    }
  }, [history]);

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        handleSignIn,
        handleLogout,
        loading,
        setLoading,
        errorMsg,
        allUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
