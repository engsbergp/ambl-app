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
  
  
  // useEffect(() => {
    //   for (let i=0; i < eachNft.length; i++) {
      //       name:eachNft[i].name
      //       description(eachNft[i].name)
      //       setNftCardImage(eachNft[i].token_uri)
      //   }
      
      // return
      // setAreNfts(true);
      // console.log(eachNft)
      // },[eachNft])
      
      
      // useEffect(() => {
        //   console.log(eachNft)
        // },[eachNft])




  //nft states
  const [ eachNft, setEachNft ] = useState([]);
  
  const fetchNfts = async () => {
    
    //get user nft info from moralis database
    //data is returned in the moralis naming convention, for consistentcy I assume
    //no actual NFT data, rather a moralis IPFS link to the actual token metadata "token_uri"
    const userEthNfts = await Web3Api.account.getNFTs({ 
      chain:'eth',
      address:currentEthAddress
    });
    //returns a data array along with header information
    //array contains 39 objects (the # of NFTs in my wallet)
    // console.log(userEthNfts)
    
    //store the moralis database information 
    const userNftArray = userEthNfts.result;
    //still returns an array my NFTs, yay!
    // console.log(userNftArray);
    
    //map through the moralis links to fetch actual NFT metadata
    userNftArray.map((item) => {

      //returns 39 individual objects, not listed in an array
      //here is where the problem begins, cannot map 39 individual objects
      // console.log(item);
      const token_uri = item.token_uri

      //retrieve NFT metadata from moralis database link
      axios.get(token_uri)
      .then((res) => res.json)
      .then(data =>{

        //returns 39 individual objects of the NFT metadata
        //getting what I need, but not as an array
        JSON.parse(data)
        console.log(data)
      }
      );
      // ???
      //there needs to be another step at this point
      //I need to store these individual objects as a single array
      // ???

      //currently setting state with the individual objects
      //Ideally, I would just pass the array in and map through in my component 
      setEachNft({
        name:res.data.name,
        description:res.data.description,
        token_url:res.data.image,
      })          
    })
    .catch((err) => console.log(err));
  });
};

//Cleanup
useEffect(() => {
  //returns 39 individual objects with my NFT metadata in the naming convention set in state
  //name, description, and token_urI
  //I am passing everything correctly, but not as an array
  //the array is necessary because of the fetch request between sets of moralis and marketplace 
  // console.log(eachNft)
},[eachNft])




//onClick function on 'explore' page
// const fetchNfts = async () => {
    
  //get user nft info from moralis database
  //data is returned in the moralis naming convention, for consistentcy I assume
  //no actual NFT data, rather a moralis IPFS link to the actual token metadata "token_uri"
  // const userEthNfts = await Web3Api.account.getNFTs({ 
      // chain:'eth',
      // address:currentEthAddress
    // });
    //returns
    // console.log(userEthNfts)

    //store const with moralis database information 
    // const userNftArray = userEthNfts.result;
    //returns an array of 39 objects (the # of NFTs in my wallet)
    // console.log(userNftArray)

    //map through the moralis links to get the actual NFT metadata
  //   userNftArray.map((item) => {
  //       console.log(item);
  //       const token_uri = item.token_uri
    
  //       axios.get(token_uri)
  //       .then((res) => {
          
  //     setEachNft({
  //       name:res.data.name,
  //       description:res.data.description,
  //       token_url:res.data.image,
  //     })          
  //   })
  //   .catch((err) => console.log(err));
  // })
// }


    // axios.get(userNftArray)
    // .then((res) => {
      //   console.log(res)
      // return Object.values(res)
      // })
      
      // setEachNft(
        //   userNftArray.map((item) => {
          //   console.log(item);
          
          //   const token_uri = item.token_uri
      
          //   axios.get(token_uri)
          //     .then((res) => {
            //       console.log(Object.values(res))
            //       return Object.values(res)
            //     })
            //     .catch((err) => console.log(err));
            //   })  
            // )          
            
            
            
            
            // const fetchNfts = async () => {
              
              //   const userEthNfts = await Web3Api.account.getNFTs({ 
                //     chain:'eth',
                //     address:currentEthAddress
                //   });
                
                //   const userNftArray = userEthNfts.result;
                //   userNftArray.map((item) => {
                  //     console.log(item);
                  //     const token_uri = item.token_uri
                  
                  //     axios.get(token_uri)
                  //     .then((res) => {
                    //       setEachNft({
                      //         name:res.data.name,
  //         description:res.data.description,
  //         token_url:res.data.image,
  //       })          
  //     })
  //     .catch((err) => console.log(err));
    // })
  // }
  
  
  
  return(
    <Web3Context.Provider 
    value={{ 
      eachNft
    }}>
      <Web3Functions.Provider value={{ fetchNfts }}>
            { children }
      </Web3Functions.Provider>
    </Web3Context.Provider>
  )
};