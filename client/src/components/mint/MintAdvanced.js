import React from 'react'
import { useMintFunctions } from '../../context/MintContext';


export default function MintAdvanced() {

  const { createSimpleNft } = useMintFunctions();

  return (
    <div 
      className="card-md active mint-options" 
      onClick={ createSimpleNft }
    >
     Create Advanced NFT 
    </div>
  )
}
