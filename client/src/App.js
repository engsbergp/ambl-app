import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';
import { AuthProvider } from './context/AuthContext';
import { SpotifyProvider } from './context/SpotifyContext';
import * as ROUTES from './constants/routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './scss/App.scss';


const App = () => {


  return (
    <ModalProvider>
      <AuthProvider>
        <SpotifyProvider>
          <AudioProvider>
            <div className="App">
              <Router>
                  <Switch>
                    <Route exact path={ROUTES.HOME} component={ROUTES.Visualizer} />
                    <Route path={ROUTES.LISTEN} component={ROUTES.Listen} />
                    <Route path={ROUTES.CREATE} component={ROUTES.Create} />
                    <Route path={ROUTES.PLAY} component={ROUTES.Play} />
                    <Route path={ROUTES.SHARE} component={ROUTES.Share} />
                    <Route path={ROUTES.ABOUT} component={ROUTES.About} />
                  </Switch>
                <Header/>
                <Footer/>
              </Router>
            </div>
          </AudioProvider>
        </SpotifyProvider>
      </AuthProvider>
    </ModalProvider>
  );
}

export default App;
