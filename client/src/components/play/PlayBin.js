import React from 'react';
import { useVisualData } from '../../context/VisualContext';
import { useThemeStyles } from '../../context/ThemeContext';
import metadata from '../visual/metadata.json'
import ReactPlayer from 'react-player'

function PlayBin() {

  const { setPlayVideoActive, playVideoActive, setPlayNftIndex } = useVisualData();
  const { btn } = useThemeStyles();

  
  return (
    <div className='row overflow-x'>
      {
        metadata.map((item, index) =>
        <div 
        className="center" 
        onClick={
          function setActiveNft() {
            setPlayVideoActive(item.image);
            setPlayNftIndex(index);
          }}
          style={{display:"flex", flexDirection:"column", justifyContent:"center"}} 
          key={index}
          >
            {
              item.mime_type === "video" && 
              <>
                <ReactPlayer 
                  url={item.image} 
                  controls={false} 
                  volume={0}
                  muted={true}
                  playing={false}
                  className="mt1 ml1 mr1" 
                  style={{border: item.image === playVideoActive && `5px solid ${btn}`, minWidth:"100px", objectFit:"cover", cursor:"pointer"}} 
                  height="100px" width="150px"
                />
                <p style={{cursor:"pointer"}} className="mb1">{item.name}</p>
              </>
            } 
          </div>  
        )
      }
    </div>
  )
}

export default PlayBin
