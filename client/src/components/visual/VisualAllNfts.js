import React from 'react';
import metadata from './metadata.json';
import { useThemeStyles } from '../../context/ThemeContext'

export default function VisualAllNfts() {
  
  const { text1 } = useThemeStyles();

  return (
    <>
    <div className="card-container gap-sm width-100 pl3 pr3">
          {
            metadata.map((item, index) => 
            <div 
            style={{ color:text1}} 
            className="card-xl"
            key={index}
            >
              <img 
                loading="lazy" 
                style={{objectFit:"cover", cursor:"pointer"}}
                quality={10}
                height="80%" width="80%" 
                src={item.image} 
                className={item.mime_type === "video" && "remove"}
              />
              <iframe 
                loading="lazy" 
                controls="false"
                style={{objectFit:"cover", padding:'0', border:"none", overflow:"hidden", cursor:"pointer"}}
                height="80%" width="80%" 
                src={item.image} 
                className={item.mime_type === "image" && "remove"}
              />
              <p>{item.name}</p>
              {/* <p>{item.description}</p> */}
            </div>
            )
          }
    </div>
    </>
  )
}

