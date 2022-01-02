import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';
import { AuthProvider } from './context/AuthContext';
import * as ROUTES from './constants/routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './scss/App.scss';

const App = () => {

  return (
    <AuthProvider>
      <AudioProvider>
        <ModalProvider>
          <div className="App">
            <Router>
                <Switch>
                  <Route exact path={ROUTES.HOME} component={ROUTES.Visualizer} />
                  <Route path={ROUTES.LISTEN} component={ROUTES.Listen} />
                  <Route path={ROUTES.CREATE} component={ROUTES.Create} />
                  <Route path={ROUTES.PLAY} component={ROUTES.Play} />
                  <Route path={ROUTES.SHARE} component={ROUTES.Share} />
                  <Route path={ROUTES.ABOUT} component={ROUTES.About} />
                  <Route path={ROUTES.ABOUT2} component={ROUTES.About2} />
                  <Route path={ROUTES.ABOUT3} component={ROUTES.About3} />
                </Switch>
              <Header/>
              <Footer/>
            </Router>
          </div>
        </ModalProvider>
      </AudioProvider>
    </AuthProvider>
  );
}

export default App;
