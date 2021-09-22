import { createContext, FC } from 'react';

interface IUserProvider {
  user: {};
  handleSignIn: (email: string, password: string) => void;
  handleLogout: () => void;
}

export const UserContext = createContext<IUserProvider>({
  user: {},
  handleSignIn: () => {},
  handleLogout: () => {},
});

export const UserProvider: FC = ({ children }) => {
  const handleSignIn = () => {};
  const handleLogout = () => {};
  return (
    <UserContext.Provider
      value={{
        user: {},
        handleSignIn,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
