import React, { useContext, useState, useEffect } from "react";


const MintDataContext = React.createContext();
const MintFunctionContext = React.createContext();

export function useMintData() {
  return useContext(MintDataContext);
}

export function useMintFunctions() {
  return useContext(MintFunctionContext);
}

export function MintProvider({ children }) {

  const [ nftTitle, setNftTitle ] = useState('My NFT');
  const [ nftDescription, setNftDescription ] = useState('');
  const [ inputAttribute, setInputAttribute ] = useState('');
  const [ inputValue, setInputValue ] = useState('');
  const [ nftAttributes, setNftAttributes ] = useState([]);
  const [ nftSimpleAdvanced, setNftSimpleAdvanced ] = useState('');

  function resetNftSimpleAdvanced() {
    setNftSimpleAdvanced("");
  }

  function createSimpleNft() {
    setNftSimpleAdvanced("simple");
  }

  function addAttribute() {
    const newAttribute = { 
      attribute: inputAttribute,
      value: inputValue
    };

    const newAttributes = [...nftAttributes, newAttribute ];

    setNftAttributes(newAttributes);

    setInputAttribute('')
    setInputValue('')
  }

  function removeAttribute() {
    console.log('bye');
  }
  
  return(
    <MintDataContext.Provider 
      value={{ 
        nftTitle, setNftTitle, 
        nftDescription, setNftDescription, 
        nftAttributes, setNftAttributes, 
        inputValue, setInputValue,
        inputAttribute, setInputAttribute
    }}>
      <MintFunctionContext.Provider
        value={{ 
          removeAttribute, 
          addAttribute, 
          resetNftSimpleAdvanced, 
          createSimpleNft, 
          nftSimpleAdvanced, setNftSimpleAdvanced
      }}>
            { children }
      </MintFunctionContext.Provider>    
    </MintDataContext.Provider>
  )
};