import React from 'react'

function Visualization(props) {
  return (
    <div>
      <iframe title="visualization" className="visualization" src={props.currentVisualizer}></iframe>
    </div>
  )
}
export default Visualization
