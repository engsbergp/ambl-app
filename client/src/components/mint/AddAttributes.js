import React from 'react'
import * as FaIcons from 'react-icons/fa';
import { useMintData, useMintFunctions } from '../../context/MintContext';

export default function AddAttributes() {

  const { inputAttribute, setInputAttribute, inputValue, setInputValue } = useMintData();
  const { addAttribute } = useMintFunctions();
  return (
  <div className="row flex-row gap-sm align-center">
    <div 
      className="btn-icon-circle-sm btn-grey"
      onClick={ addAttribute }
    >
      <FaIcons.FaPlus />
    </div>
    <input
      className="input-attribute"
      placeholder="Attribute"
      value={inputAttribute}
      onChange={(event )=> setInputAttribute(event.target.value)}
    />
    <input
      className="input-value"
      placeholder="Value"
      value={inputValue}
      onChange={(event )=> setInputValue(event.target.value)}
    />
  </div>
  )
}
