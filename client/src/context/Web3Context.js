import React, { useContext, useState } from "react";

const Web3Context = React.createContext();

export function useWeb3Context() {
  return useContext(Web3Context);
}

export function Web3Provider({ children }) {

  const [ network, setNetwork ] = useState('');
  const [ walletAddress, setWalletAddress ] = useState('');

  return(
    <Web3Context.Provider value={{ network, setNetwork, walletAddress, setWalletAddress }}>
            { children }
    </Web3Context.Provider>
  )
};