import React, { useContext, useEffect, useState } from "react";
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

  // const [ network, setNetwork ] = useState('');
  const [ walletAddress, setWalletAddress ] = useState('');
  const [ walletConnected, setWalletConnected ] = useState(false);
  const [ nftData, setNftData ] = useState([]);


  const connectWallet = async () => {

    if(typeof window.ethereum !== "undefined") { 
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});

      setWalletAddress(accounts[0]);

      setWalletConnected(!walletConnected);
    }
  }

  useEffect(() => {
    if (!walletAddress) return;
      axios.get(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)
      .then(res => {
        setNftData(res.data.items)
        // console.log(res.data.items[0].meta.content[0].mimeType)
        console.log(res.data.items)
      }).catch(e => {
        console.error(e);
      }) 
  }, [walletAddress])



  // useEffect(() => {
  //   getNftData();
  // }, [walletAddress])

  // useEffect(() => {
  //   if(window.ethereum) {
  //     window.ethereum.on('chainChanged', () => {
  //       connectWallet();
  //     })
  //     window.ethereum.on('accountsChanged', () => {
  //       connectWallet();
  //     })
  //   }
  // })

  return(
    <Web3Context.Provider value={{ walletAddress, setWalletAddress, walletConnected, setWalletConnected, nftData, setNftData }}>
      <Web3Functions.Provider value={{ connectWallet }}>
            { children }
      </Web3Functions.Provider>
    </Web3Context.Provider>
  )
};