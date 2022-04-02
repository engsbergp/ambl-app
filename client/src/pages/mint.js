import React from 'react'
import MintPlayer from '../components/mint/MintPlayer';
import MintSettings from '../components/mint/MintSettings';
import { useThemeStyles } from '../context/ThemeContext'
import '../scss/pages/mint.scss';

function Mint() {

  const { bg1, text1 } = useThemeStyles();

  return (
    <>
    <div style={{background:"#222", opacity:"0.6", position:"fixed", left:"0", top:"0", right:"0", bottom:"0", cursor:"default"}}></div>
    <div style={{cursor:"default", fontSize:"3rem", opacity:"1", color:"#ffffff", position:"fixed", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
      <p>AMBL Minting Coming Soon</p>
      <p>Stay Tuned!</p>
    </div>
    <div className="page flex-row" style={{background:bg1, color:text1}}>
      <MintPlayer/>
      <MintSettings/>
    </div>
      </>
  )
}
export default Mint
