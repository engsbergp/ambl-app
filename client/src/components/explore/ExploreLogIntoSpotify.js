import React from 'react'
import {useThemeStyles} from '../../context/ThemeContext'


export default function ExploreLogIntoSpotify() {

  const { text1Active } = useThemeStyles();

  return (
    <div style={{ color:text1Active, fontSize:"1.5rem", padding:"3rem", textAlignLast:"center"}}className="col100">
     <p className="pt3">To browse and play music, please log into your Spotify premium account</p> 
    </div>
  )
}
