import React from 'react'
import CreateVideoBin from '../components/create/CreateVideoBin';
import CreateAudioBin from '../components/create/CreateAudioBin';
import CreateMetadata from '../components/create/CreateMetadata';
import CreateControls from '../components/create/CreateControls';
import CreateMintBtn from '../components/create/CreateMintBtn';
import CreatePreview from '../components/create/CreatePreview';
import '../scss/utility/colors.scss';
import '../scss/pages/create.scss';

function Create() {
  return (
    <div className="create active">
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
    </div>
  )
}

export default Create
