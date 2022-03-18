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
  const [ nftQuantity, setNftQuantity ] = useState('');
  const [ existingAbi, setExistingAbi ] = useState('');
  const [ existingPermalink, setExistingPermalink ] = useState('');
  const [ permalinkRadio, setPermalinkRadio ] = useState('none');
  const [ permalinkInputPlaceholder, setPermalinkInputPlaceholder ] = useState('none');
  const [ nftDescription, setNftDescription ] = useState('');
  const [ inputAttribute, setInputAttribute ] = useState('');
  const [ inputValue, setInputValue ] = useState('');
  const [ nftAttributes, setNftAttributes ] = useState([]);


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
  

  useEffect(() => {

    { permalinkRadio === 'none' ? 
     setPermalinkInputPlaceholder('')
     :
     setPermalinkInputPlaceholder(`Existing ${permalinkRadio} link`)
    }

  }, [permalinkRadio])

  return(
    <MintDataContext.Provider 
      value={{ 
        nftTitle, setNftTitle, 
        nftQuantity, setNftQuantity, 
        existingAbi, setExistingAbi, 
        existingPermalink, setExistingPermalink, 
        permalinkRadio, setPermalinkRadio, 
        permalinkInputPlaceholder, setPermalinkInputPlaceholder,
        nftDescription, setNftDescription, 
        nftAttributes, setNftAttributes, 
        inputValue, setInputValue,
        inputAttribute, setInputAttribute
    }}>
      <MintFunctionContext.Provider
        value={{ 
          removeAttribute, 
          addAttribute, 
      }}>
            { children }
      </MintFunctionContext.Provider>    
    </MintDataContext.Provider>
  )
};