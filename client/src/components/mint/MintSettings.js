import React from 'react'
import { useMintData, useMintFunctions } from '../../context/MintContext';
import { useThemeStyles } from '../../context/ThemeContext';
import AddAttributes from './AddAttributes';
import * as FaIcons from 'react-icons/fa';

export default function MintSettings() {

  const { 
    nftTitle, setNftTitle, 
    setNftDescription, 
    setNftAttributes,
    // setNftQuantity, 
    // setExistingAbi, 
    // setExistingPermalink, 
    // permalinkRadio, setPermalinkRadio, 
    // permalinkInputPlaceholder, 
    nftAttributes } = useMintData();

  const { createItem } = useMintFunctions();

  // const permalinkOptions = ["none", "arweave", "pinata", "ipfs"]; 

  const { btn, text1Active }= useThemeStyles();

  return (
    <div className="col30 mint-settings ">

        {/* TITLE AND DESCRIPTION */}

        { 
        nftTitle.length === 0 ? 
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

        {/* <input 
          type="text"
          className="input-quantity"
          placeholder="qty"
          onChange={e => setNftQuantity(e.target.value)}
        /> */}

        <p>Description</p>
        <textarea 
          type="text"
          className="textarea"
          onChange={e => setNftDescription(e.target.value)}
        />
        
        {/* COLLAPSIBLE MENUS?? */}

        {/* ATTRIBUTES */}

        <p className="mt1">Attributes</p>

        <AddAttributes/>

        { 
          //map through attributes
          nftAttributes.map((item, index) => (
            
            <div key={ index } className="row flex-row mt-sm gap-sm align-center active">
              <div 
                className="btn-icon-circle-sm"
                style={{ background:btn, color:text1Active }}
                onClick={ () => {
                  //minus button removes attribute on click locally
                  //duplicates array, filters, and replaces via state
                  const arr = nftAttributes.filter((removed) => removed !== item);
                  setNftAttributes(arr);
                 }

                }
              >
                <FaIcons.FaMinus/>
              </div>
              <p>{item.attribute}</p>
              <p>{item.value}</p>
            </div>

        ))}

        {/* calls function inside mintContext */}
        <button 
          className="btn-round-md mt1" 
          style={{ background:btn, color:text1Active }}
          onClick={ createItem }
        >
          Mint NFT
        </button>



        {/* <p className="mt1"> Advanced - Existing Contract and Permalink </p> */}
        {/* MINT TO CONTRACT */}
        
        {/* <div className="row">
          <input 
            type="text"
            className="input-title mt1"
            placeholder="Existing Contract ABI"
            onChange={e => setExistingAbi(e.target.value)}
          />
        </div> */}

        {/* EXISTING PINATA OR ARWEAVE URL */}
        {/* <div className="row align-center mt1">
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
        </div> */}

        {/* <div className="row">
          <input 
            type="text"
            className={permalinkRadio === 'none' ? "input-title disabled" : "input-title"}
            disabled={permalinkRadio === 'none'}
            placeholder={permalinkInputPlaceholder}
            onChange={e => setExistingPermalink(e.target.value)}
          />
        </div> */}

    </div>
  )
}
