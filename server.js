const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());


//retrieve initial auth token, refresh token, and session expiration

app.post('/login', (req, res) => {
  //set redirect and retrieve the ID and secret, stored in 'code' from URL
  const code = req.body.code
  console.log(code);
  const spotifyApi = new SpotifyWebApi({
    // redirectUri: 'https://ambl.io',
    // redirectUri: 'http://localhost:3000',
    redirectUri: 'http://3.92.203.97:3000',
    clientId: process.env.DEV_REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.DEV_REACT_APP_SPOTIFY_CLIENT_SECRET,
  })

  spotifyApi
    //create json file with necessary tokens
    //listening for /login in 'spotify context'
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
  })
  .catch((err) => {
    // res.sendStatus(400);
    console.log(err);
  })
})


//refresh the auth token 

app.post('/refresh', (req, res) => {
  //set port and retrieve the refresh token with the ID and secret
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    // redirectUri: 'https://ambl.io',
    // redirectUri: 'http://localhost:3000',
    redirectUri: 'http://3.92.203.97:3000',
    clientId: process.env.DEV_REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.DEV_REACT_APP_SPOTIFY_CLIENT_SECRET,
    refreshToken
  })

  //create json file with access token
  //listening for /refresh in 'spotify context'
  spotifyApi
    .refreshAccessToken()
    .then(data => {
      // console.log(data.body)
      res.json({
        accessToken: data.body.accessToken,
      })
    }).catch(() => {
      // res.sendStatus(400);
      console.log(err);
    })
  })


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.listen(PORT, console.log(`Server is Listening at ${PORT}`))