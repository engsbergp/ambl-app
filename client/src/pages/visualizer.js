import React from 'react';
import Visualization from '../components/visualizer/visualization';
import FullScreenHome from '../components/misc/fullScreenHome';

import '../scss/pages/visualizer.scss';

function Visualizer() {
  // const data = visualizationData.visualizations;
  // const [activeVisualizer, setActiveVisualizer] = useState("https://editor.p5js.org/philengsberg/full/Z1dUuPZF6");
  const activeVisualizer = "https://editor.p5js.org/philengsberg/full/Z1dUuPZF6";


  return (
    <div className="visualizer active">

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
