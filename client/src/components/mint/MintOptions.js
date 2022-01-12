import React from 'react'
import MintSimple from './MintSimple'
import MintAdvanced from './MintAdvanced'

export default function MintOptions() {

  return (
    <div className="row flex-row mint-player center gap2">
      <MintSimple/>
      <MintAdvanced/>
    </div>
  )
}