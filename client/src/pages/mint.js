import React from 'react'
import MintPlayer from '../components/mint/MintPlayer';
import MintSettings from '../components/mint/MintSettings';
import { useThemeStyles } from '../context/ThemeContext'
import '../scss/pages/mint.scss';

function Mint() {

  const { bg1, text1 } = useThemeStyles();

  return (
    <div className="page flex-row" style={{background:bg1, color:text1}}>
        <MintPlayer/>
        <MintSettings/>
    </div>
  )
}
export default Mint
