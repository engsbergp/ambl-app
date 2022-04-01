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
  const [ areNfts, setAreNfts ] = useState(false);
  
  const fetchNfts = async () => {
    //get moralis data
    const userEthNfts = await Web3Api.account.getNFTs({ 
      chain:'eth',
      address:currentEthAddress
    });

    // console.log(userEthNfts);
    const userNftArray = userEthNfts.result;
    // console.log(userNftArray);
    //set NFT marketplace data to state
     
     userNftArray.forEach(item => {
        // console.log(item)
        const token_uri = item.token_uri;
        //fetch metadata from moralis urls
        if (token_uri) {
          axios.get(token_uri)
          .then(res => setMetadata(previousState => [...previousState, res.data])).catch((err) => console.log(err));
        }
        //set new metadata array in state
        // .then(res => arr.push(res.data))
      })
      // console.log(metadata)
      setAreNfts(true)
    };

  
  return(
    <Web3Context.Provider 
      value={{ 
        metadata,
        areNfts
    }}>
      <Web3Functions.Provider value={{ fetchNfts }}>
            { children }
      </Web3Functions.Provider>
    </Web3Context.Provider>
  )
};