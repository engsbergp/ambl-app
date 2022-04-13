import React from 'react';
import { useThemeStyles } from '../context/ThemeContext'

function About() {

  const { bg1, text1 } = useThemeStyles();

  return (
    <div className="col100 center" style={{background:bg1, color:text1}}>

        <h1 className="mb2 mt4">Ambient Landscapes (AMBL)</h1>
        
        <div style={{width:"60%", minWidth:"300px"}} className="overflow-y">

          {/* GENERAL */}
          <h2>Welcome!</h2>
          <p className="mb1">
            An ecosystem for collectors, curators, artists, and community members:  
            to integrate blockchain art into everyday lives in an easy-to-use 
            multimedia experience. A cross-blockchain NFT media player and creation suite.
          </p>

          <p className="mb1">
            Cutting to the core of the matter, AMBL is seamless interaction between
            community, artist, and brand: A self sustaining ecosystem driven by entertainment.
            The future of Web3 removes the middle-man, and puts the power in the hands of the individual.
          </p>

          <ul className="ml3 mb1">
            <li>Music and visuals are supplied directly from the artist</li>
            <li>Brands compete for top ad placement through the AMBL ecosystem</li>
            <li>Community members are rewareded for playing content, and staking in their favorite artists</li>
          </ul>

          <h2>It's Web3 Spotify on steroids.</h2>
          <p className="mb1">
            Your NFTs respond to your Spotify - 
            Artists deliver exclusive content, unlocked by your NFTs - 
            Curate a profile from the NFTs of your choice - 
            Player themes made from your NFTs - 
            Playlists created for a musical AND visual experience.
          </p>

          {/* COLLECTORS */}
          <h2>Collectors</h2>
          <p className="mb1">
            <b>COLLECTORS</b> have the freedom to customize their NFT profile 
            and enhance their media experience. 
            Connect to your favorite blockchains (Ethereum, Solana, Tezos, Near), 
            and showcase your NFTs with a range of playback options. 
            Earn AMBL rewards for supplying assets and showcasing your favorite works.
          </p>

          {/* ARTISTS */}
          <h2>Artists</h2>
          <p className="mb1">
            Leveraging the Web3 and Spotify API's, AMBL encourages responsive and generative artwork.  
            <b> ARTISTS</b> can mint an NFT to their blockchain of choice,
            and add their work to the AMBL library of visualizations, to be used in tandem the audio player.
          </p>  
          <p className="mb1">  
            Artists can create responsive artwork themselves, or have a "filter" applied
            when watching your artwork from a playlist (turning jpgs into living photos).
            Responsive and generative artists are supported 
            in a range of industry standard languages and programs (p5, processing, unity, blender). 
            Traditional artists have straightforward access to sophisticated minting tools,
            and can save on fees when paying with the AMBL token.
          </p>

          {/* CURATORS */}
          <h2>Curators</h2>
          <p className="mb1">
            As AMBL's library of content grows, <b>CURATORS</b> will have an 
            enormous collection of NFTs at their fingertips.  
            Curators can spend AMBL to make playlists, or bid for advertizing space. 
            Built-in social platforms help connect with artists, collectors and community members. 
            Curators have the creative freedom to create a truly customizable audio and visual
            experience for their followers and clients.  
          </p>

          {/* COMMUNITY */}
          <h2>Community</h2>
          <p className="mb1">
            All AMBL users have access to the comprehensice library of visualizations, 
            and the power to connect them to your favorite audio player. <b>COMMUNITY MEMBERS </b>
            will have an experience catered by an ever-growing group of artists,
            collectors, and curators. Experience customized playlists, or import your existing content.
            Community members can create themes, customize the 
            player, and collect rewards for simply being a part of the community.
          </p>

          {/* TOKENOMICS */}
          <h2>Tokenomics</h2>
          <p className="mb1">
            The Ambient Landscapes economy will be managed by the AMBL token. 
            Users will be rewarded with the token for...
          </p>
          <ul className="ml3 mb1">
            <li>staking their NFTs</li>
            <li>staking AMBL with their favorite artists</li>
            <li>playing media through the platform</li>
            <li>importing existing NFT's</li>
            <li>receiving views</li>
          </ul>
          <p>Users can spend their AMBL tokens on...</p>
          <ul className="ml3 mb1">
            <li>minting NFT's</li>
            <li>voting on popular content</li>
            <li>tipping creators and curators</li>
            <li>promotions and advertising</li>
            <li>swapping on DEX</li>
          </ul>
          
          <p className="mb1">Tokens will be resupplied into the AMBL economy on a weekly basis.</p>
          <h2>Social Impact</h2>
          <p className="mb1">
            One of the biggest hurdles to large-scale blockchain adoption, is its resource consumption.
            Though this is a short term concern, it does not change the fact that our planet's natural resources
            have been squandered since the turn of the 20th century.
          </p>
          <p className="mb1">
            The irony is thick like butter. The most beautiful landscape NFT photography 
            in a world where natural resources and ecology are being exhausted at such an alarming rate.
          </p>
          <p className="mb1">
            It is a bold goal for a start-up to hold, but AMBL strives to donate
            10% of the revenue from advertising and voting to reforestation, and environmental cleanup. <u>Let's 
              make it possible for our grandchildren to mint their own landscape photography.</u>
          </p>

        <h2>Road Map</h2>
        <ul className="ml3 mb2">
            <h3 className="mt-sm"><u>2022</u></h3>
            <li>June - Open development</li>
            <p>Support for ETH</p>
            <li>August - Beta testing</li>
            <p>Whitelisting within discord community</p>
            <p>Support for MATIC</p>
            <li>October - Widen and scale</li>
            <p>Partnerships across marketplaces</p>
            <p>Incorporate feature requests</p>
            <li>December - Full user onboarding</li>
            <p>Support for AVAX</p>

            <h3 className="mt-sm"><u>2023</u></h3>
            <li>February - AMBL ICO</li>
            <p>Beginnings of the AMBL ecosystem</p>
            <p>Advertising, and staking</p>
            <p>Support for SOL</p>
            <p></p>
            <li>June - Support for XTZ</li>
            <li>October - Support for NEAR</li>
            <p className="mt2">It's far off in the future</p>
            <p className="mt-sm">I am only one man</p>
            <p className="mt-sm">with a laptop and a vision</p>
            <p className="mt-sm">Let's see what happens</p>
            <p></p>

            {/* <h3 className="mt-sm"><u>2024</u></h3>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li> */}
          </ul>
        </div>
    </div>
  )
}

export default About
