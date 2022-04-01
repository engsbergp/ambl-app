import React, { useContext, useState, useEffect } from "react";
import { useMoralisFile } from "react-moralis";

const MintDataContext = React.createContext();
const MintFunctionContext = React.createContext();

export function useMintData() {
  return useContext(MintDataContext);
}

export function useMintFunctions() {
  return useContext(MintFunctionContext);
}

export function MintProvider({ children }) {

  //MORALIS STATES
  const { saveFile } = useMoralisFile();  
  
  //LOCAL METADATA INPUTS
  const [ nftTitle, setNftTitle ] = useState('');
  const [ nftQuantity, setNftQuantity ] = useState('');
  const [ nftDescription, setNftDescription ] = useState('');
  const [ inputAttribute, setInputAttribute ] = useState('');
  const [ inputValue, setInputValue ] = useState('');
  const [ nftAttributes, setNftAttributes ] = useState([]);

  //ADVANCED MINT INPUTS
  // const [ existingAbi, setExistingAbi ] = useState('');
  // const [ existingPermalink, setExistingPermalink ] = useState('');
  // const [ permalinkRadio, setPermalinkRadio ] = useState('none');
  // const [ permalinkInputPlaceholder, setPermalinkInputPlaceholder ] = useState('none');

  //IMAGE METADATA
  const [ nftIpfsHash, setNftIpfsHash ] = useState('');
  const [ nftIpfsUrl, setNftIpfsUrl ] = useState('');
  const [ nftFileIpfsHash, setNftFileIpfsHash ] = useState('');
  const [ nftFileIpfsUrl, setNftFileIpfsUrl ] = useState('');

  //NFT METADATA ARRAY
  const [ metadata, setMetadata ] = useState([])
  
  //TOKEN STATES
  const TOKEN_CONTRACT_ADDRESS = "0x39369a8a00B9Be54eC6F820Aa38d1cCCda69fD6E";


  //CREATION FLOW
  //image is uploaded locally
  //image is stored on IPFS - provides a link to use for NFT metadata
  //title, description, attributes, and imageUrl are serialised and .json is stored on IPFS
  //IPFS metadata is minted to the blockchain


  //add attributes to an attribute array
  //inside mintSettings/addAttributes
  //removeAttributes is a local function
  const addAttribute = () => {
    const newAttribute = { 
      trait_type: inputAttribute,
      value: inputValue,
    };

    const newAttributes = [...nftAttributes, newAttribute ];

    setNftAttributes(newAttributes);

    setInputAttribute('')
    setInputValue('')
  }

  //set the name and active status of fields
  //change the origin of the input
  // useEffect(() => {

  //   { permalinkRadio === 'none' ? 
  //    setPermalinkInputPlaceholder('')
  //    :
  //    setPermalinkInputPlaceholder(`Existing ${permalinkRadio} link`)
  //   }

  // }, [permalinkRadio])


  //update metadata throughout creation process
  //needed to prevent data from falling behind
  ////for some reason I can't log state 
  ////immediately after changing it in an async moralis function 
  useEffect(() => {
    setMetadata(
      {
        name: nftTitle,
        description: nftDescription,
        nftFilePath: nftIpfsUrl,
        nftFileHash: nftIpfsHash,
        attributes: nftAttributes,
      }
    );
  }, [nftTitle, nftDescription, nftIpfsUrl, nftIpfsHash, nftAttributes])


  //save metadata file to IPFS 
  //this is the final data for the NFT
  //contains title, description, link, and attributes
  //keeping functions singular, separate, and process/flow oriented
  //this async function is called by another async function
  const saveMetadataIpfs = async (f) => {
    const file = await saveFile(
      "file.json", 
      {base64 : btoa(JSON.stringify({metadata}))}, 
      {
        type: "base64",
        saveIPFS: true,
      },
    );
    setNftFileIpfsUrl(file._ipfs);
    setNftFileIpfsHash(file._hash);
  }

  //called with the "mint" button is clicked
  const createItem = async () => {
    //check for required values
    if (!nftTitle) return alert("please title");
    if (!nftDescription) return alert("please description");
    if (!nftIpfsUrl) return alert('please upload');

    //metadata is set in useeffect
    //upload metadata json to IPFS
    //this is an async function calling another async function
    await saveMetadataIpfs();
  }


  //CLEANUP
  //set all fields back to an empty string
  //brings the user to a new screen with the finished product
  // useEffect(() => {
    // console.log(nftFileIpfsUrl);
    // console.log(nftFileIpfsHash);
    // alert('file uploaded to IPFS with hash' + nftIpfsHash + 'and is available at' + nftIpfsUrl)
    // setNftTitle('');
    // setNftDescription('');
    // setNftAttributes([]);
    // setNftIpfsUrl('');
    // setNftIpfsHash('');
  // }, [nftFileIpfsUrl, nftFileIpfsHash])



  return(
    <MintDataContext.Provider 
      value={{ 
        nftTitle, setNftTitle, 
        nftQuantity, setNftQuantity, 
        nftDescription, setNftDescription, 
        nftAttributes, setNftAttributes, 
        inputValue, setInputValue,
        inputAttribute, setInputAttribute,
        nftIpfsHash, setNftIpfsHash,
        nftIpfsUrl, setNftIpfsUrl,
        TOKEN_CONTRACT_ADDRESS
        // existingAbi, setExistingAbi, 
        // existingPermalink, setExistingPermalink, 
        // permalinkRadio, setPermalinkRadio, 
        // permalinkInputPlaceholder, setPermalinkInputPlaceholder,
    }}>
      <MintFunctionContext.Provider
        value={{ 
          createItem,
          addAttribute, 
      }}>
            { children }
      </MintFunctionContext.Provider>    
    </MintDataContext.Provider>
  )
};