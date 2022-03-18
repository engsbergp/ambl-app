import React, { useState } from 'react'
import { useMintData } from '../../context/MintContext';
import AddAttributes from './AddAttributes';
import NftAttributes from './NftAttributes';


export default function MintSettings() {

  const { 
    nftTitle, setNftTitle, 
    setNftQuantity, 
    setExistingAbi, 
    setExistingPermalink, 
    permalinkRadio, setPermalinkRadio, 
    permalinkInputPlaceholder, setPermalinkInputPlaceholder, 
    setNftDescription, 
    nftAttributes, setNftAttributes } = useMintData();

  const [permalinkOptions, setPermalinkOptions] = useState(["none", "arweave", "pinata", "ipfs"]); 

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
        <h2>{ nftTitle }</h2>
        }

        <input 
          type="text"
          className="input-title"
          placeholder="NFT Title"
          onChange={e => setNftTitle(e.target.value)}
        />

        <input 
          type="text"
          className="input-quantity"
          placeholder="qty"
          onChange={e => setNftQuantity(e.target.value)}
        />

        <p>Description</p>
        <textarea 
          type="text"
          className="textarea"
        />
        
        {/* COLLAPSIBLE MENUS?? */}

        {/* ATTRIBUTES */}

        <p className="mt1">Attributes</p>

        {/* generates attributes held in state within 'mint context' */}
        <AddAttributes/>
        { 
          nftAttributes.map((item, index) => (
            <NftAttributes key={ index } item={ item }/>
        ))}


        <p className="mt1"> Advanced - Existing Contract and Permalink </p>
        {/* MINT TO CONTRACT */}
        
        <div className="row">
          <input 
            type="text"
            className="input-title mt1"
            placeholder="Existing Contract ABI"
            onChange={e => setExistingAbi(e.target.value)}
          />
        </div>

        {/* EXISTING PINATA OR ARWEAVE URL */}
        <div className="row align-center mt1">
          {permalinkOptions.map(options => (
            <>
              <input
                type="radio"
                name="permalinks"
                value={options}
                checked={permalinkRadio === options}
                onChange={e => setPermalinkRadio(e.target.value)}
              />
              <p className="mr1">{options}</p>
            </>
          ))}
        </div>

        <div className="row">
          <input 
            type="text"
            className={permalinkRadio === 'none' ? "input-title disabled" : "input-title"}
            disabled={permalinkRadio === 'none'}
            placeholder={permalinkInputPlaceholder}
            onChange={e => setExistingPermalink(e.target.value)}
          />
        </div>

      </form>
    </div>
  )
}
