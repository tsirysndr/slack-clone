import { Login_login } from "./GraphQL/User/types/Login";

export const ACCESS_TOKEN = 'accessToken';

/**
 * Authentication
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(ACCESS_TOKEN);
};

/**
 * AccessToken
 */
export const setAccessToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const removeAccessToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const setCurrentUserInfos = (user: Login_login): void => {
  return localStorage.setItem('currentUser', JSON.stringify(user));
} 

export const getCurrentUserInfos = (): Login_login | null => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

export const removeCurrentUserInfos = (): void => {
  return localStorage.removeItem('currentUser');
}

/**
 * /!\ Clear localStorage /!\
 */
export const clearLocalStorage = () => {
  localStorage.clear();
};
