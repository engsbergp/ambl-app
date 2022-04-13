import React, { useState, useContext } from "react";
import metadata from '../components/visual/metadata.json'

const VisualContext = React.createContext();

export function useVisualData() {
  return useContext(VisualContext);
}

export function VisualProvider({ children }) {
  
  //player data
  const [ playVideoActive, setPlayVideoActive ] = useState(metadata[4].image);

  //player controls
  const [ isFullScreen, setIsFullScreen ] = useState(false);
  const [ isFade, setIsFade ] = useState(false);
  const [ isRandom, setIsRandom ] = useState(false);
  const [ loopLength, setLoopLength ] = useState();
  // const [ playerCountdown, setPlayerCountdown ] = useState('');
  const [ playNftIndex, setPlayNftIndex ] = useState('');

  //go to selected NFT page
  const [ exploreNft, setExploreNft ] = useState();

  //set interval match the player controls
  // useEffect(() => {
  //   if (!loopLength || loopLength < 1) return;
  //   const intervalId = setInterval(
  //     intervalTimer , loopLength * 1000);
  //   return () => clearInterval(intervalId);
  // }, [loopLength, playVideoActive])
  
  //update loop length to new number from controls
  // const intervalTimer = () => {
  //   console.log(`loop length ${loopLength}`);
  //   setLoopLength(loopLength)
  // }
  
  //create array of values from available nfts 
  //return a random number when "interval" is rerendered
  // const [playNftArray, setPlayNftArray] = useState([]);


  //bind the randomly selected index to the image of that index 
  //set the newly randomly generated image to the active nft image



  //cleanup log events
  // useEffect(() => {
  //   console.log(playNftIndex)
  // })
  
  return(
    <VisualContext.Provider 
      value={{ 
        playVideoActive, setPlayVideoActive,
        isFullScreen, setIsFullScreen,
        isFade, setIsFade,
        isRandom, setIsRandom,
        loopLength, setLoopLength,
        playNftIndex, setPlayNftIndex,
        exploreNft, setExploreNft,
        // setPlayNftArray,
        // playerCountdown
      }}>
        {children}
    </VisualContext.Provider>
  )
}