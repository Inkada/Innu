import Head from "next/head"
import Nav from "../Components/Component/Nav/Nav"

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
        <Nav></Nav>
        <div>
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
        </div>
      </main>

      <footer></footer>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
        }
        article {
          background-color: green;
          display: flex;
        }

        section {
          background-color: blue;
        }

        p {
          font-size: 30px;
        }
      `}</style>
    </>
  )
}
