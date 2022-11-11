function Home() {
  const onCallbackPage = (): void => {
    window.open(
      "chrome-extension://mgmgikmfbdnpicpemgnfbmhopnmkejap/tabs/callback.html"
    )
  }

  return (
    <div>
      <button onClick={onCallbackPage}>听歌</button>
    </div>
  )
}

export default Home
