import App, { Container } from "next/app"
import Firebase from "../Firebase/firebase"
import { AppContextProvider } from "../Hooks/Contex"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AppContextProvider value={new Firebase()}>
        <Component {...pageProps} />
      </AppContextProvider>
    )
  }
}

export default MyApp
