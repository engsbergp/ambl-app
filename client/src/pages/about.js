import React, { useState } from 'react';
import * as GrIcons from 'react-icons/gr';
import '../scss/utility/body.scss';
import '../scss/utility/typography.scss';

function About() {

  const [pageCount, setPageCount] = useState(1)

  function nextPage() {
    setPageCount(prevCount => prevCount + 1)
  }

  function previousPage() {
    setPageCount(prevCount => prevCount - 1)
  }

  return (
    <div className="col50 text-primary">
      <h1 className="mt7 mb2">Ambient Landscapes (AMBL)</h1>
      {
        pageCount === 1 &&
        
        <div className="col100 gap2 text-primary overflow-y">
          <p>
            An ecosystem for collectors, curators, enjoyers, and artists;  
            to integrate blockchain art into daily lives through accessible 
            aesthetics and multimedia experiences. A cross-blockchain NFT webframe 
            and creation suite.
          </p>
          <p>
            <b>COLLECTORS</b> can connect their wallets from multiple blockchains 
            (Tezos, Ethereum, Solana, Near), and showcase their NFTs with a huge 
            range of playback options. Collectors are rewarded for supplying assets
            to help build bridges between blockchains, and showcaseing your favorite 
            works from your favorite creators.
          </p>
          <p>
            To connect with Spotify and other popular API's,
            the platform encourages responsive and generative art.  
            <b> ARTISTS</b> can mint an NFT to their blockchain of choice,
            and have their work added to the library of visualizations. Generative artists 
            will have support for widely used development languages, and more traditional
            artists will have straightforward access to sophisticated minting tools.
          </p>
          <div className="row arrows justify-right mb3 icon-lg">
            <GrIcons.GrLinkNext onClick={nextPage} />
          </div>
        </div>
      }

      {
        pageCount === 2 &&

        <div className="col100 gap2 text-primary overflow-y">
          <p>
            As the library of content begins to grow, <b>CURATORS</b> will be able to 
            access an enormous collection of NFT's submitted by artists and collectors.  
            Curators will have the opportunity to create playlists, and establish 
            relationships with artists, viewers, and collectors. Curators will have the
            creative freedom to reorganize and relayer existing content to suit their
            own style and fanbase.
          </p>
          <p>
            All users will have access to the comprehensice library of visualizations 
            and the power to connect them to your favorite audio player. <b>ENJOYERS </b>
            will have an experience catered by an ever-growing community of artists,
            collectors, and curators.
          </p>
          <p>
            Building a community is essential and part of 
            the fun! Each user can enjoy the environment to their own level of dedication,
            and this cooperation will pave the way for volumes of content,
            and long-form advertising opportunities 
          </p>
          
          <div className="row arrows space-between mb3 icon-lg overflow-y">
            <GrIcons.GrLinkNext onClick={ previousPage } className="rotate180"/>
            <GrIcons.GrLinkNext onClick={ nextPage }/>
          </div>
        </div>
      }

      {
        pageCount === 3 &&

        <div className="col100 gap1 text-primary">
          <p>
            The Ambient Landscapes economy will be managed by the AMBL token. 
            Users will be rewarded with the token for...
          </p>
          <ul className="ml3">
            <li>minting NFT's</li>
            <li>importing existing NFT's</li>
            <li>staking their NFTs</li>
            <li>playing media through the platform</li>
            <li>receiving views</li>
          </ul>
          <p>Users can spend their AMBL tokens on...</p>
          <ul className="ml3">
            <li>voting on popular content</li>
            <li>tipping creators and curators</li>
            <li>promotions and advertising</li>
            <li>swapping on DEX</li>
          </ul>
          <p>Tokens will be resupplied into the AMBL economy on a weekly basis.</p>
          <p>
            5% of the revinue reclaimed from advertising and voting will be donated 
            to reforestation programs.
          </p>
          <div className="row arrows justify-left mb3 icon-lg">
              <GrIcons.GrLinkNext onClick={ previousPage } className="rotate180"/>
          </div>
        </div>
        
      }
    </div>
  )
}

export default About
