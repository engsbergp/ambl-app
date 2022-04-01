import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';
import { MintProvider } from './context/MintContext';
import { Web3Provider } from './context/Web3Context';
import { AuthProvider } from './context/AuthContext';
import { SpotifyProvider } from './context/SpotifyContext';
import { UtilityProvider } from './context/UtilityContext';
import { ThemeProvider } from './context/ThemeContext';
import { MoralisProvider } from "react-moralis";
import * as ROUTES from './constants/routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './scss/components/header.scss';
import './scss/components/header-mobile.scss';
import './scss/utility/body.scss';
import './scss/colors/colors.scss';
import './scss/colors/staticColors.scss';
import './scss/utility/typography.scss';
import './scss/utility/actions.scss';
import './scss/App.scss';

const App = () => {
  
  return (
    // <MoralisProvider serverUrl="https://v1wfbyfxl6rk.usemoralis.com:2053/server" appId="e9KypoVfZyy1lD3UdfcjzQv2YlBz29o0DUhwGh71">
    <MoralisProvider serverUrl="https://kxuhrrby9w9m.usemoralis.com:2053/server" appId="w0PeIyOAFyKZSLr6XOGBkbpBvJoydyj5KAvroyIx">
      <ThemeProvider>
        <AuthProvider>
          <Web3Provider>
            <MintProvider>
              <ModalProvider>
                <SpotifyProvider>
                  <AudioProvider>
                    <UtilityProvider>
                      <div className="App">
                        <Router>
                          <Switch>
                            <Route exact path={ROUTES.HOME} component={ROUTES.Visualizer} />
                            <Route path={ROUTES.EXPLORE} component={ROUTES.Explore} />
                            <Route path={ROUTES.MINT} component={ROUTES.Mint} />
                            <Route path={ROUTES.PLAY} component={ROUTES.Play} />
                            <Route path={ROUTES.SHARE} component={ROUTES.Share} />
                            <Route path={ROUTES.ABOUT} component={ROUTES.About} />
                          </Switch>
                          <Header/>
                          <Footer/>
                        </Router>
                      </div>
                    </UtilityProvider>
                  </AudioProvider>
                </SpotifyProvider>
              </ModalProvider>
            </MintProvider>
          </Web3Provider>
        </AuthProvider>
      </ThemeProvider>
    </MoralisProvider>  
  );
}

export default App;
