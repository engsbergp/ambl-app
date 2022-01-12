import React from 'react'
import MintPlayer from '../components/mint/MintPlayer';
import MintSettings from '../components/mint/MintSettings';
import { useMintFunctions } from '../context/MintContext';
import MintOptions from '../components/mint/MintOptions';
import '../scss/utility/colors.scss';
import '../scss/utility/body.scss';
import '../scss/pages/mint.scss';

function Mint() {
  const { nftSimpleAdvanced } = useMintFunctions();

  return (
    <div className="page flex-row">

      { 
        nftSimpleAdvanced === 'simple' ?
        <>
        <MintPlayer/>
        <MintSettings/>
        </>
        :
        <MintOptions/>
      }      
    </div>
  )
}
export default Mint
