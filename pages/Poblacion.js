import Nav from "../Components/Component/Nav/Nav"
import Csv from "../Components/Component/CsvReader/CsvReader"

export default function Poblacion() {
  return (
    <>
      <Nav></Nav>
      <h1>Soy población</h1>
      <Csv></Csv>

      <style jsx>{`
        hi {
          font-size: 2000px;
        }
      `}</style>
    </>
  )
}
