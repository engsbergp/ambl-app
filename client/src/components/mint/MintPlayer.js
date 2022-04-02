import React, { useEffect, useState } from 'react'
import { useMintData } from '../../context/MintContext';


export default function MintPlayer() {
  

  const { setNftIpfsHash, nftIpfsUrl, setNftIpfsUrl } = useMintData();

  const [ nftFile, setNftFile ] = useState('');
  const [ activeNft, setActiveNft ] = useState('');


  //display active NFT on page
  useEffect(() => {
    if (!nftFile) return;
    setActiveNft(URL.createObjectURL(nftFile));
  }, [nftFile])


  //save to ipfs
  
  //remove file
  const removeFile = () => {
    console.log("nothing")
    setNftFile('');
    setNftIpfsUrl('');
    setNftIpfsHash('');
  }
  

  return (
    <div className="col70 mint-player">
      
      {/* upload image */}
      
      {
        //checks for an active image, hides the file input field 
        //checks for an uploaded image, hides the "upload" button
        //removeFile button clears the image data, both local and IPFS
        nftFile ? 
          <>
            <img src={activeNft} alt="my nft" style={{ maxWidth:"80%", maxHeight:"80%"}}/>
            <div className="row center gap1 mt1">
              <button className={nftIpfsUrl && "remove"} onClick={removeFile}>Upload File</button>
              <button onClick={removeFile}>Remove File</button>
            </div>
          </>
          :
          <input type="file" onChange={ (e) => setNftFile(e.target.files[0]) }/>
      }
  
  </div>
  )
}
