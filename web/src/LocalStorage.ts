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

/**
 * /!\ Clear localStorage /!\
 */
export const clearLocalStorage = () => {
  localStorage.clear();
};
