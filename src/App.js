
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Visualizer from './pages/visualizer';
import Listen from './pages/listen';
import Create from './pages/create';
import Play from './pages/play';
import Share from './pages/share';
import About from './pages/about';
import About2 from './pages/about2';
import About3 from './pages/about3';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Visualizer} />
            <Route path="/listen" component={Listen} />
            <Route path="/create" component={Create} />
            <Route path="/play" component={Play} />
            <Route path="/share" component={Share} />
            <Route path="/about" component={About} />
            <Route path="/about2" component={About2} />
            <Route path="/about3" component={About3} />
          </Switch>
        <Header/>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
