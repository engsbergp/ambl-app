import React from 'react'
import { useMintData, useMintFunctions } from '../../context/MintContext';
import whales from "../../assets/whales-like-coffee.mp4"
import * as FaIcons from 'react-icons/fa';


export default function MintPlayer() {

  const { 
    nftTitle, setNftTitle, 
    nftDescription, setNftDescription, 
    nftAttributes, setNftAttributes } = useMintData();

  return (
    <div className="col70 mint-player">

      <iframe className="mint-iframe" controls="none"  width="100%" src={whales} />
  
  </div>
  )
}
