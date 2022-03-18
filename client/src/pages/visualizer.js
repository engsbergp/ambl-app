import React from 'react';
import Visualization from '../components/visualizer/visualization';
import FullScreenHome from '../components/misc/fullScreenHome';
// import { useSpotifyTokens } from '../context/SpotifyContext'
import { useThemeStyles } from '../context/ThemeContext'
import '../scss/pages/visualizer.scss';

function Visualizer() {
  // const data = visualizationData.visualizations;
  // const [activeVisualizer, setActiveVisualizer] = useState("https://editor.p5js.org/philengsberg/full/Z1dUuPZF6");
  const activeVisualizer = "https://editor.p5js.org/philengsberg/full/Z1dUuPZF6";

  const { bg1, text1 } = useThemeStyles();

  return (
    <div className="visualizer active" style={{background:bg1, color:text1}}>




        {/* <VisualizerControls
          visData={data}
          changeVisualization={activeVisualizer => setActiveVisualizer(activeVisualizer)}
        /> */}

          <Visualization currentVisualizer={activeVisualizer}/>
          <FullScreenHome/>

    </div>
  )
}

export default Visualizer
