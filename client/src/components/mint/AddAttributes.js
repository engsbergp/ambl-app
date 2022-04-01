import React from 'react'
import * as FaIcons from 'react-icons/fa';
import { useMintData, useMintFunctions } from '../../context/MintContext';
import { useThemeStyles } from '../../context/ThemeContext';

export default function AddAttributes() {

  const { inputAttribute, setInputAttribute, inputValue, setInputValue } = useMintData();
  const { addAttribute } = useMintFunctions();

  const { btn, text1Active } = useThemeStyles();

  return (
  <div className="row flex-row gap-sm align-center">
    <div 
      style={{background:btn, color:text1Active}}
      className="btn-icon-circle-sm"
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
