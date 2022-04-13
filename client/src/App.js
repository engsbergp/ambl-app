import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './scss/App.scss';

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={ROUTES.Visualizer} />
          <Route exact path={ROUTES.EXPLORE} component={ROUTES.Explore} />
          <Route path={ROUTES.EXPLORE_NFT} component={ROUTES.ExploreNft} />
          <Route path={ROUTES.MINT} component={ROUTES.Mint} />
          <Route path={ROUTES.PLAY} component={ROUTES.Play} />
          <Route path={ROUTES.SHARE} component={ROUTES.Share} />
          <Route path={ROUTES.ABOUT} component={ROUTES.About} />
        </Switch>
        <Header/>
        <Footer/>
      
      
      </Router>
    </div>
  );
}

export default App;
