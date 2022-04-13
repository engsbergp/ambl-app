import React, { useState, useContext } from "react";

const FooterNavContext = React.createContext();

export function useFooterNav() {
  return useContext(FooterNavContext);
}

export function UtilityProvider({ children }) {

  const [ footerMenuActive, setFooterMenuActive ] = useState('audio')

  return(
    <FooterNavContext.Provider 
      value={{ 
        footerMenuActive, setFooterMenuActive
      }}>
        {children}
    </FooterNavContext.Provider>
  )
}