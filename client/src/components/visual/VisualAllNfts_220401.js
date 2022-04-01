import React, {useState } from 'react';
import { useAuthData } from '../../context/AuthContext'
import { useMoralisWeb3Api } from "react-moralis";
import axios from "axios";
import { useEffect } from 'react';

export default function VisualAllNfts() {

  // mint states
  const { currentEthAddress } = useAuthData();

  //moralis states
  const Web3Api = useMoralisWeb3Api();

  //nft states
  const [ metadata, setMetadata ] = useState([]);
  const [ areNfts, setAreNfts ] = useState([]);
  
  const fetchNfts = async () => {
    //get moralis data
    const userEthNfts = await Web3Api.account.getNFTs({ 
      chain:'eth',
      address:currentEthAddress
    });


    const arr = await Promise.all(
      userEthNfts.result.map(async (item) => {
        // console.log('item', item);
  
        //fetch metadata from moralis urls
        const { data } = await axios.get(item.token_uri);
  
        // console.log('data', data);
  
        return data;
      })
    );
  
    setMetadata(arr);
    setAreNfts(true)
  };
  
  useEffect(() => {
    console.log('metadata', metadata)
    setAreNfts(false);
    setAreNfts(true);
  }, [metadata]);


  return (
    <>
      <button className="btn-round-md" onClick={fetchNfts}>
        Get Nfts
      </button>

        <>
          {metadata.map((item, index) => 
              <div className="card" key={index}>
              <img src={item.data.image}/>
              <p>{item.data.name}</p>
              <p>{item.data.description}</p>
            </div>
          )}
        </>
    </>
  )
}

