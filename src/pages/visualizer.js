import React from 'react';
// import visualizationData from '../components/visualizer/visualizationData.json';
// import VisualizerControls from '../components/visualizer/visualizerControls';
import Visualization from '../components/visualizer/visualization';
import FullScreenHome from '../components/misc/fullScreenHome';
import './visualizer.scss';

function Visualizer() {
  // const data = visualizationData.visualizations;
  // const [activeVisualizer, setActiveVisualizer] = useState("https://editor.p5js.org/philengsberg/full/Z1dUuPZF6");
  const activeVisualizer = "https://editor.p5js.org/philengsberg/full/Z1dUuPZF6";

  return (
    <div className="visualizer">
        {/* <VisualizerControls
          visData={data}
          changeVisualization={activeVisualizer => setActiveVisualizer(activeVisualizer)}
        /> */}
        <Visualization 
          currentVisualizer={activeVisualizer}
        />
        <FullScreenHome/>
    </div>
  )
}

export default Visualizer
