import React, { useContext } from "react";
// import { useAuthData } from "./AuthContext";
// import axios from "axios";

const Web3Context = React.createContext();
const Web3Functions = React.createContext();

export function useWeb3Context() {
  return useContext(Web3Context);
}

export function useWeb3Functions() {
  return useContext(Web3Functions);
}

export function Web3Provider({ children }) {
  
  // mint states  
  
  // const [ eachNftName, setEachNftName ] = useState();
  // const [ eachNftDescription, setEachNftDescription ] = useState();
  // const [ eachNftUrl, setEachNftUrl ] = useState();
  // const [ eachNftMimeType, setEachNftMimeType ] = useState();
      

  //nft states
  
  return(
    <Web3Context.Provider 
      value={{ }}>
      <Web3Functions.Provider value={{ }}>
            { children }
      </Web3Functions.Provider>
    </Web3Context.Provider>
  )
};