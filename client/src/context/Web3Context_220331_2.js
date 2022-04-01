import React, { useContext, useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useAuthData } from "./AuthContext";
import axios from "axios";

const Web3Context = React.createContext();
const Web3Functions = React.createContext();

export function useWeb3Context() {
  return useContext(Web3Context);
}

export function useWeb3Functions() {
  return useContext(Web3Functions);
}

export function Web3Provider({ children }) {

  //moralis states
  const Web3Api = useMoralisWeb3Api();
  
  // mint states
  const { currentEthAddress } = useAuthData();
  
  
  // const [ eachNftName, setEachNftName ] = useState();
  // const [ eachNftDescription, setEachNftDescription ] = useState();
  // const [ eachNftUrl, setEachNftUrl ] = useState();
  // const [ eachNftMimeType, setEachNftMimeType ] = useState();
      

  //nft states
  const [ metadata, setMetadata ] = useState([]);
  const [ areNfts, setAreNfts ] = useState(false)
  
  const fetchNfts = async () => {
    //get moralis data
    const userEthNfts = await Web3Api.account.getNFTs({ 
      chain:'eth',
      address:currentEthAddress
    });

    const userNftArray = userEthNfts.result;
    
    //array to push looped token_uri
    let arr = [];
    userNftArray.forEach((item) => {
      const token_uri = item.token_uri;
      //fetch metadata from moralis urls
      axios.get(token_uri)
      //push results to array
      .then(res => arr.push(res.data))
        })
      //global variable to pass to components
      // console.log(arr)
      setMetadata(arr);
  
    };
        
    useEffect(() => {
      setTimeout(() => {
        // console.log("hello")
        console.log(metadata)
      // setAreNfts(true);
      }, 5000);
    },[metadata])
  


  
  return(
    <Web3Context.Provider 
    value={{ 
      metadata
    }}>
      <Web3Functions.Provider value={{ fetchNfts }}>
            { children }
      </Web3Functions.Provider>
    </Web3Context.Provider>
  )
};