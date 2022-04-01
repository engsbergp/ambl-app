import React from 'react';
import { useWeb3Context } from "../../context/Web3Context";
import { useThemeStyles } from '../../context/ThemeContext'

export default function VisualAllNfts() {

  const { nftData } = useWeb3Context();
  const { card, text1 } = useThemeStyles();

  return (
    <>
      <p style={{ color:text1 }}className="mt1">All NFTs</p>
      <div className="card-container gap-sm width-100">
        {nftData.map(data =>   
          <div style={{ background:card }} className="card-md text-sm p1 pointer" key={data.id}>

            {/* if image, display image, if video, display video */}
                        {/* SET UP EVENTUALLY */}

            {/* { data.meta.content[0].mimeType === "video/mp4" 
              ?

              <video className="width-100" src={data.meta.content[0].url}>
              </video>
              :
              <img src={data.meta.content[0].url} className="width-100"/>
            } */}
            {data.meta.content[0] ? 
            <img src={data.meta.content[0].url} className="width-100" alt={data.meta.name}/>
            :
            <p>cannot retrieve image data</p>
            }
            

            {/* name */}
            <p style={{ color:text1 }} className="ellipsis width-100">{data.meta.name}</p>

          </div>                 
          )
        }
      </div>
    </>
  )
}
