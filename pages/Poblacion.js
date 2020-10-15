import Nav from "../Components/Component/Nav/Nav"
import Csv from "../Components/Component/CsvReader/CsvReader"
import { colors } from "../Estilos/theme"

export default function Poblacion() {
  return (
    <>
      <main>
        <div>
          <Nav></Nav>
        </div>
        <article>
          <h1>Soy población</h1>
          <Csv></Csv>
        </article>
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
        }
        div {
          width: 16.7%;
          background-color: ${colors.base};
        }

        article {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
        }
        hi {
          font-size: 2000px;
        }
      `}</style>
    </>
  )
}
