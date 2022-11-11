import { useState } from "react";
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';

function Callback() {

  return (
    <div>
      <SpotifyAuth
        redirectUri={'chrome-extension://mmhhhpdpaegemidlbnfafcpbddnaleom/tabs/callback.html'}
        clientID={process.env.PLASMO_PUBLIC_SPOTIFY_CLIENT_ID}
        scopes={[
          Scopes.userReadPrivate,
          Scopes.userReadEmail,
          'user-top-read'
        ]}
        showDialog={false}
        title="登录 Spotify"
        onAccessToken={(token) => console.log(token)}
      />
    </div>
  )
}

export default Callback
