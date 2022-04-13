import React from 'react';
import { Link } from 'react-router-dom'
import metadata from './metadata.json';
import { useThemeStyles } from '../../context/ThemeContext'
import { useVisualData } from '../../context/VisualContext'
import * as ROUTES from '../../constants/routes'
import ReactPlayer from 'react-player'

export default function VisualAllNfts() {
  
  const { text1 } = useThemeStyles();

  const { setExploreNft } = useVisualData();

  return (
    <div className="card-container gap-sm width-100 pl3 pr3">
      {
        metadata.map((item, index) => 
        <Link 
          to={ ROUTES.EXPLORE_NFT }
          onClick={()=>setExploreNft(item)}
          style={{ color:text1}} 
          className="card-xl"
          key={index}
        >
          {
            item.mime_type === "image" ? 
            <img 
              loading="lazy" 
              style={{objectFit:"cover", cursor:"pointer"}}
              quality={10}
              height="80%" width="80%" 
              src={item.image} 
              alt={item.name}
            />
              :
            <ReactPlayer 
              url={item.image} 
              controls={true} 
              volume={0}
              muted={true}
              playing={false}
              style={{ padding:'0', border:"none", overflow:"hidden", cursor:"pointer"}}
              height="80%" width="80%" 
            />
          }
          <p>{item.name}</p>
        </Link>
        )
      }
    </div>
  )
}

