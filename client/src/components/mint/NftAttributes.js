import React from 'react';
import { useMintData } from '../../context/MintContext';
import { useMintFunctions } from '../../context/MintContext';
import * as FaIcons from 'react-icons/fa';

export default function NftAttributes( {item} ) {

  const { removeAttribute } = useMintFunctions();


  return (
    <div className="row flex-row mt-sm gap-sm align-center active">
      <div 
        className="btn-icon-circle-sm btn-grey"
        // onClick={ removeAttribute }
      >
        <FaIcons.FaMinus />
      </div>
      <p>{item.attribute}</p>
      <p>{item.value}</p>
  </div>
  )
}
