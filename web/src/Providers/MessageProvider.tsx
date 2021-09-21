import React, { createContext, FC } from 'react';

export const MessageContext =  createContext({});

export const MessageProvider: FC = ({ children }) => {
  return (
    <MessageContext.Provider value={{}}>
      {children}
    </MessageContext.Provider>
  )
}