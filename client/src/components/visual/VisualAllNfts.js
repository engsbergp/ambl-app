import React, {useState, useEffect } from 'react';
import metadata from './metadata.json';
import { useThemeStyles } from '../../context/ThemeContext'
import mime from "mime";
// import { useAuthData } from '../../context/AuthContext'
// import { useMoralisWeb3Api } from "react-moralis";
// import axios from "axios";

export default function VisualAllNfts() {

  //nft states
  // const [ metadata, setMetadata ] = useState([]);
  // const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  
  const { card, text1 } = useThemeStyles();

  return (
    <>
    {/* <button style={{height:"200px", width:"200px"}} onClick={checkMimeType}> check mime type </button> */}

    <div className="card-container gap-sm width-100">
          {
            metadata.map((item, index) => 
            <div 
            style={{ color:text1}} 
            className="card-xl text-sm pointer"
            key={index}
            >
              <img height="80%" width="80%" src={item.image} className={item.mime_type === "video" && "remove"}/>
              <video controls height="80%" width="80%" src={item.image} className={item.mime_type === "image" && "remove"}/>
              <p>{item.name}</p>
              {/* <p>{item.description}</p> */}
            </div>
            )
          }
    </div>
    </>
  )
}

