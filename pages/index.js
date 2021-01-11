import Head from "next/head"

import Nav from "../Components/Component/Nav/Nav"

import CompBar from "../Components/Component/Compar/CompBar"
import CompRadar from "../Components/Component/Compar/CompRadar"
import MedProcess from "../Components/Component/Compar/MedProcess"
import Recomendations from "../Components/Component/Compar/Recomendations"

import { colors } from "../Estilos/theme"

import { useEffect } from "react"
import { useAppContext } from "../Hooks/Contex"

const FirebaseContext = React.createContext

export default function Home() {
  const { variableState, setVariableState } = useAppContext()

  //ComponentDidMouunt
  useEffect(() => {
    setVariableState(true)
  }, [variableState])

  return (
    <>
      <Head>
        <title>Innu </title>
        <link rel="icon" href="/innufavicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div>
          <Nav></Nav>
        </div>
        <cambiante>
          <p>Dashboard</p>

          <article>
            <section>
              <span>
                <CompBar></CompBar>
              </span>
              <span>
                <CompRadar></CompRadar>
              </span>
              <span>
                <MedProcess></MedProcess>
              </span>
              <span>
                <Recomendations></Recomendations>
              </span>
            </section>
          </article>
        </cambiante>
      </main>

      <footer></footer>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
          font-family: Poppins;
          max-height: 100%;
          width: 100%;
        }

        cambiante {
          width: 83.3%;
          max-height: 100%;
          background-color: ${colors.base};
        }
        div {
          width: 16.7%;
        }

        cambiante p {
          margin: 0px 0px 15px 20px;
        }
        cambiante span {
          margin: 0px 0px 15px 20px;
        }

        article {
          display: flex;
        }

        section {
          display: flex;
          flex-wrap: wrap;
          max-height: 100vh;
        }
        span {
          width: 47.5%;
        }
        p {
          font-size: 25px;
          padding-top: 10px;
        }
      `}</style>
    </>
  )
}
