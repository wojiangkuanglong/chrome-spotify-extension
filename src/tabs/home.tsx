import { useState } from "react";

function Home() {

  const onCallbackPage = (): void => {
    window.open('chrome-extension://mmhhhpdpaegemidlbnfafcpbddnaleom/tabs/callback.html')
  }

  return (
    <div>
      <button onClick={onCallbackPage}>听歌</button>
    </div>
  )
}

export default Home
