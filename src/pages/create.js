import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import CreateVideoBin from '../components/create/CreateVideoBin';
import CreateAudioBin from '../components/create/CreateAudioBin';
import CreateMetadata from '../components/create/CreateMetadata';
import CreateControls from '../components/create/CreateControls';
import CreateMintBtn from '../components/create/CreateMintBtn';
import CreatePreview from '../components/create/CreatePreview';
import './create.scss';

function Create() {
  return (
    <div className="create">
      <Header/>
        <div className="create-player">
          <CreatePreview/>
          <CreateControls/>
        </div>
        <div className="create-addmedia">
          <div className="create-bins">
            <CreateVideoBin/>
            <CreateAudioBin/>
          </div>
          <div className="create-mint">
            <CreateMetadata/>
            <CreateMintBtn/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Create
