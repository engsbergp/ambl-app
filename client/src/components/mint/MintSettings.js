import React from 'react'
import { useMintData, useMintFunctions } from '../../context/MintContext';
import AddAttributes from './AddAttributes';
import NftAttributes from './NftAttributes';

export default function MintSettings() {

  const { 
    nftTitle, setNftTitle, 
    nftDescription, setNftDescription, 
    nftAttributes, setNftAttributes } = useMintData();

    const { addAttribute } = useMintFunctions();

  return (
    <div className="col30 mint-settings ">
      <form 
        action=""
      >
        {/* TITLE AND DESCRIPTION */}

        { 
          nftTitle.length == 0 ? 
          <h2> NFT Title </h2>
          :
          <h2>{nftTitle}</h2>
        }
        <input 
          type="text"
          className="input-title"
          placeholder="NFT Title"
          onChange={e => setNftTitle(e.target.value)}/>
          
        <p>Description</p>
        <textarea 
          type="text"
          className="textarea"
        />
        
        {/* OPTIONAL */}

        <p className="mt1">OPTIONAL</p>

        <AddAttributes/>

        { 
          nftAttributes.map((item, index) => (
            <NftAttributes key={ index } item={ item }/>
        ))}
      </form>
    </div>
  )
}
