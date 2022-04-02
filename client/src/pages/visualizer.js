import React from 'react';
import Visualization from '../components/visualizer/visualization';
import FullScreenHome from '../components/misc/fullScreenHome';
import { useThemeStyles } from '../context/ThemeContext'

function Visualizer() {
  const activeVisualizer = "https://editor.p5js.org/philengsberg/full/Z1dUuPZF6";

  const { bg1, text1 } = useThemeStyles();

  return (
    <div className="visualizer active" style={{background:bg1, color:text1}}>

          <Visualization currentVisualizer={activeVisualizer}/>
          <FullScreenHome/>

    </div>
  )
}

export default Visualizer
