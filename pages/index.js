import Head from "next/head"
import Nav from "../Components/Component/Nav/Nav"
import { colors } from "../Estilos/theme"

export default function Home() {
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
            <span>
              <section>Hey</section>
              <section>que</section>
            </span>

            <span>
              <section>tal</section>
              <section>soy una seccion</section>
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

        cambiante {
          width: 87%;
          margin: 15px 20px 15px 20px;
          background-color: ${colors.base};
        }

        cambiante p {
          margin: 15px 20px 15px 20px;
        }
        cambiante span {
          margin: 15px 20px 15px 20px;
        }

        div {
          width: 16.7%;
        }
        article {
          background-color: green;
          display: flex;
        }

        section {
          background-color: blue;
          width: 100%;
        }

        p {
          font-size: 30px;
        }
      `}</style>
    </>
  )
}
