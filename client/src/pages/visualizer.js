import React, { useState } from 'react';
import { useThemeStyles } from '../context/ThemeContext'
import { useSpotifyTokens } from '../context/SpotifyContext';
import * as AiIcons from 'react-icons/ai';
import FlowField from '../sketches/flowfield';
import Circles from '../sketches/circles';
import BwSine from '../sketches/BwSine';
import Sine1 from '../sketches/sine1';
import Sine2 from '../sketches/sine2';
import spacetimeGif from '../assets/spacetimeGif.gif';
import coalsGif from '../assets/coalsGif.gif';
import ghostcarsMp4 from '../assets/ghostcarsMp4.mp4';
import mistMp4 from '../assets/mistMp4.mp4';
import coldbrewGif from '../assets/coldbrewGif.gif';
import ReactPlayer from 'react-player'

function Visualizer() {

  const { bg1, text1, btn } = useThemeStyles();

  //Full Screen Button Functions
  // function getFullscreenElement() {
  //   return document.fullscreenElement
  //       || document.webkitFullscreenElement
  //       || document.mozFullscreenElement
  //       || document.msFullscreenElement;
  //     }

  const handleFullScreen = () => {
    document.getElementById("visualizer").requestFullscreen().catch(console.log)
  }

  const [ vis, setVis ] = useState(1);
  const [ ambl, setAmbl ] = useState(1);

  const { isFooter } = useSpotifyTokens();

  return (
    <>
      <div id="visualizer" className={isFooter? "page-footer" : "page"} style={{background:bg1, color:text1}}>
        <div className={isFooter ? "block" : "remove"}>
          {(() => {
            if (vis === 1) {
              return (
                <FlowField/>
                )
              } else if (vis === 2) {
                return (
                  <Sine1/>
                )
              } else if (vis === 3) {
                return (
                  <BwSine/>
                )
              } else if (vis === 4) {
                return (
                  <Circles/>
                )
              } else {
                return (
                  <Sine2/>
                )
              }
          })()}
          
          <div 
            className="gap-sm mr1 mb2" 
            style={{opacity:".8", display:"flex", flexDirection:"row", position:"absolute", bottom:"0", right:"0"}}>
            <button onClick={() => setVis(1)} style={{background:btn, color:text1}} className="btn-round-sm">1</button>
            <button onClick={() => setVis(2)} style={{background:btn, color:text1}} className="btn-round-sm">2</button>
            <button onClick={() => setVis(3)} style={{background:btn, color:text1}} className="btn-round-sm">3</button>
            <button onClick={() => setVis(4)} style={{background:btn, color:text1}} className="btn-round-sm">4</button>
            <button onClick={() => setVis(5)} style={{background:btn, color:text1}} className="btn-round-sm">5</button>
          </div>
        </div>
        <div style={{width:"100%", height:"100%"}} className={isFooter ? "remove" : "flex center"}>
          
          {(() => {
              if (ambl === 1) {
                return (
                  <img style={{ objectFit:"cover", width:"100vw", anchor:"bottom"}} src={spacetimeGif} alt="Spacetime Coffee in Milwaukee, Wisconsin"/>
                  )
                } else if (ambl === 2) {
                  return (
                    <ReactPlayer 
                    url={ghostcarsMp4}
                    loop={true} 
                    controls={false} 
                    volume={0}
                    muted={true}
                    playing={true}
                    width='100%'
                    height=""
                    // style={{ height:"100vh", anchor:"bottom"}}
                  />
                  )
                } else if (ambl === 3) {
                  return (
                    <img style={{ objectFit:"cover", width:"100vw", anchor:"bottom"}} src={coalsGif} alt="Walking on Hot Coals"/>
                  )
                } else if (ambl === 4) {
                  return (
                    <img style={{ objectFit:"cover", width:"100vw", anchor:"bottom"}} src={coldbrewGif} alt="Pretty Bird Coffee in Pennington NJ"/>
                  )
                } else {
                  return (
                    <ReactPlayer 
                    url={mistMp4} 
                    loop={true}
                    controls={false} 
                    volume={0}
                    muted={true}
                    playing={true}
                    width='100%'
                    height=""
                    // style={{ height:"100vh", anchor:"bottom"}}
                  />
                  )
                }
            })()}
              
        
          <div 
            className="gap-sm mr1 mb2" 
            style={{opacity:".8", display:"flex", flexDirection:"row", position:"absolute", bottom:"0", right:"0"}}>
            <button onClick={() => setAmbl(1)} style={{background:btn, color:text1}} className="btn-round-sm">1</button>
            <button onClick={() => setAmbl(2)} style={{background:btn, color:text1}} className="btn-round-sm">2</button>
            <button onClick={() => setAmbl(3)} style={{background:btn, color:text1}} className="btn-round-sm">3</button>
            <button onClick={() => setAmbl(4)} style={{background:btn, color:text1}} className="btn-round-sm">4</button>
            <button onClick={() => setAmbl(5)} style={{background:btn, color:text1}} className="btn-round-sm">5</button>
          </div>
        
        </div>


        <div className="full-screen-home">
          <AiIcons.AiOutlineFullscreen
            onClick={handleFullScreen}
          />
        </div>
      </div>
    </>
  )
}

export default Visualizer
