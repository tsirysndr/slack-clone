import React, { createContext, FC } from 'react';

export const UserContext = createContext({})

export const UserProvider: FC = ({ children }) => {
  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
}