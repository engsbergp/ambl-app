import React from 'react';
import { useMintFunctions } from '../../context/MintContext';
import { useThemeStyles } from '../../context/ThemeContext';
import * as FaIcons from 'react-icons/fa';

export default function NftAttributes( {item, index} ) {

  const { setNftAttributes, nftAttributes } = useMintFunctions();
  const { btn, text1Active } = useThemeStyles();

  return (
    <div key={index} className="row flex-row mt-sm gap-sm align-center active">
    <div 
      className="btn-icon-circle-sm"
      style={{background:btn, color:text1Active}}
      onClick={ () => {
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

  )
}
