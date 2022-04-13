import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';
import { MintProvider } from './context/MintContext';
import { Web3Provider } from './context/Web3Context';
import { AuthProvider } from './context/AuthContext';
import { VisualProvider } from './context/VisualContext';
import { SpotifyProvider } from './context/SpotifyContext';
import { UtilityProvider } from './context/UtilityContext';
import { ThemeProvider } from './context/ThemeContext';
import './scss/components/header.scss';
import './scss/utility/body.scss';
import './scss/utility/typography.scss';
import './scss/utility/actions.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Web3Provider>
          <MintProvider>
            <ModalProvider>
              <SpotifyProvider>
                <AudioProvider>
                  <VisualProvider>
                    <UtilityProvider>
                    
                      <App />
                    
                    </UtilityProvider>
                  </VisualProvider>
                </AudioProvider>
              </SpotifyProvider>
            </ModalProvider>
          </MintProvider>
        </Web3Provider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
