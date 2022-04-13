import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { useThemeStyles } from '../context/ThemeContext';
import { useVisualData } from '../context/VisualContext';
import metadata from "../components/visual/metadata.json";
import ReactPlayer from 'react-player';
import * as FaIcons from 'react-icons/fa';

export default function SelectedNft() {

  const { text1Active, bg1, btn } = useThemeStyles();

  const { exploreNft } = useVisualData();
  
  const init = Math.floor(Math.random() * (Math.floor(metadata.length) - Math.ceil(0)) + Math.ceil(0));

  return (
    <div className="page overflow-y flex " style={{background:bg1, color:text1Active}}>
      <Link  to={ROUTES.EXPLORE}>
          <p className="p-sm btn-round-sm navlink" 
            style={{background:btn, color:text1Active, position:"absolute", top:"50px", left:"15px"}}> 
             <FaIcons.FaArrowLeft/>
          </p>
      </Link>

      <div className="center" style={{color:text1Active, width:"60%"}}>
        
        {(() => {
        if (exploreNft && exploreNft.mime_type === "image") {
          return (
            <img style={{width:"100%", objectFit:"contain", maxHeight:"60vh"}} src={exploreNft.image} alt={exploreNft.name}/>
          )
        } else if (exploreNft && exploreNft.mime_type === "video") {
          return (
            <ReactPlayer
              style={{width:"100%", objectFit:"contain", maxHeight:"60vh"}} 
              controls={true} playing={true} width="100%" volume={0.5}
              url={exploreNft.image} loop={true}
            />
          )
        } else if (!exploreNft && metadata[init].mime_type === "image") {
          return (
            <img style={{width:"100%", objectFit:"contain", maxHeight:"60vh"}} width="100%" src={metadata[init].image} alt={metadata[init].name}/>
          )
        } else {
          return (
            <ReactPlayer
              style={{width:"100%", objectFit:"contain", maxHeight:"60vh"}} 
              controls={true} playing={true} width="100%" volume={0.5}
              url={metadata[init].image} loop={true}
            />
          )
        }
      })()}
        
        {
          exploreNft ? 
            <p className="mt-sm" style={{fontSize:"1.5rem"}}>{exploreNft.name}</p>
          :
            <p className="mt-sm" style={{fontSize:"1.5rem"}}>{metadata[init].name}</p>
        }


        {
          exploreNft ? 
            <p className="mt1 mb1">{exploreNft.description}</p>
          :
            <p className="mt1 mb1">{metadata[init].description}</p>
        }
      
      {
        exploreNft ?
        <>
          <a className="navlink" style={{ color:text1Active }} href={exploreNft.external_url}>
            <div className="p-sm btn-round-sm" style={{ background:btn }}> 
                view on marketplace
            </div>
          </a>
        </>
        :
        <>
          <a className="navlink" style={{ color:text1Active }} href={metadata[init].external_url}>
            <div className="p-sm btn-round-sm" style={{ background:btn }}> 
              view on marketplace
            </div>
         </a>
        </>
      }
      </div>
    </div>
  )
}
