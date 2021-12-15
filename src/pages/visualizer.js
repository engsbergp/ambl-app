import React, {useState} from 'react';
import visualizationData from '../components/visualizer/visualizationData.json';
import Header from '../components/header';
import Footer from '../components/footer';
import VisualizerControls from '../components/visualizer/visualizerControls';
import Visualization from '../components/visualizer/visualization';
import FullScreenButton from '../components/misc/fullScreenButton';

import './visualizer.scss';

function Visualizer() {
  const data = visualizationData.visualizations;
  const [activeVisualizer, setActiveVisualizer] = useState('https://editor.p5js.org/philengsberg/full/4VNQiuY7S');

  return (
    <div className="visualizer">
      <Header/>
        <VisualizerControls
          visData={data}
          changeVisualization={activeVisualizer => setActiveVisualizer(activeVisualizer)}
        />
        <Visualization 
          currentVisualizer={activeVisualizer}
        />
        <FullScreenButton/>
      <Footer/>
    </div>
  )
}

export default Visualizer
