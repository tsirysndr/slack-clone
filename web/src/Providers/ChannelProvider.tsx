import React, { createContext, FC } from 'react';

export const ChannelContext = createContext({});

export const ChannelProvider: FC = ({ children }) => {
  return (
    <ChannelContext.Provider value={{}}>
      {children}
    </ChannelContext.Provider>
  )
}