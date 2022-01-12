import React from 'react'
import { useMintData, useMintFunctions } from '../../context/MintContext';
// import MintAudioWaveform from './MintAudioWaveform'
// import MintPlayerControls from './MintPlayerControls';
import whales from "../../assets/whales-like-coffee.mp4"
import * as FaIcons from 'react-icons/fa';


export default function MintPlayer() {

  const { 
    nftTitle, setNftTitle, 
    nftDescription, setNftDescription, 
    nftAttributes, setNftAttributes } = useMintData();

  const { resetNftSimpleAdvanced } = useMintFunctions();
  return (
    <div className="col70 mint-player">
      <div 
        className="btn-grey mint-back-btn"
        onClick={ resetNftSimpleAdvanced }
      >
        <FaIcons.FaArrowLeft/>
      </div>

      <iframe className="mint-iframe" controls="none" autoplay="false" width="100%" src={whales} />
      {/* <MintAudioWaveform/>
      <MintPlayerControls/> */}
  
  </div>
  )
}
