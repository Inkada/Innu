import Head from "next/head"

import Nav from "../Components/Component/Nav/Nav"

import CompBar from "../Components/Component/Compar/CompBar"
import CompRadar from "../Components/Component/Compar/CompRadar"

import { colors } from "../Estilos/theme"

import { useEffect } from "react"
import { useAppContext } from "../Hooks/Contex"

const FirebaseContext = React.createContext

export default function Ayuda() {
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
          <p>Ayuda</p>
          <article>
            <span>
              <section></section>
              <section></section>
            </span>

            <span>
              <section></section>
              <section></section>
            </span>
          </article>
        </cambiante>
      </main>

      <footer></footer>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
          font-family: Poppins;
        }

        span {
          width: 50%;
        }
        cambiante {
          width: 87%;
          background-color: ${colors.base};
        }

        cambiante p {
          margin: 0px 20px 15px 20px;
        }
        cambiante span {
          margin: 0px 20px 15px 20px;
        }

        div {
          width: 16.7%;
        }
        article {
          display: flex;
        }

        section {
          width: 100%;
        }

        p {
          font-size: 25px;
          padding-top: 10px;
        }
      `}</style>
    </>
  )
}
