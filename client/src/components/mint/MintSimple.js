import React from 'react'
import { useMintFunctions } from '../../context/MintContext';


export default function MintSimple() {

  const { createSimpleNft } = useMintFunctions();

  return (
    <div 
      className="card-md active mint-options" 
      onClick={ createSimpleNft }
      >
     Create Simple NFT 
    </div>
  )
}



