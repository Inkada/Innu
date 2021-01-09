import AppLayout from "../../Layout/Lay"
import Link from "next/link"

import { colors } from "../../../Estilos/theme"

export default function Nav() {
  return (
    <AppLayout>
      <>
        <nav>
          <Link href="/">
            <img src="/INNU.png" alt="Logo"></img>
          </Link>
          <br></br>
          <br></br>
          <description>
            Midiendo la cultura de innovación en las empresas
          </description>
          <Link href="/">
            <p>DASHBOARD</p>
          </Link>
          <ul>
            <Link href="/Poblacion">
              <li>
                <img src="/poblacion.png" alt="Logo"></img>Población
              </li>
            </Link>
            <Link href="/Analisis">
              <li>
                <img src="/analisis.png" alt="Logo"></img>Análisis
              </li>
            </Link>
            <Link href="/FIltros">
              <li>
                <img src="/filtros.png" alt="Logo"></img>Filtros
              </li>
            </Link>
          </ul>
          <ul>
            <Link href="/Ayuda">
              <li>
                <img src="/ayuda.png" alt="Logo"></img>Ayuda
              </li>
            </Link>
            <Link href="/Login">
              <li>
                <img src="/salir.png" alt="Logo"></img>Salir
              </li>
            </Link>
          </ul>
        </nav>

        <style jsx>{`
          nav {
            display: flow-root;
            flex-direction: column;
            position: absolute;
            max-width: 250px;
            width: 16.7%;
            height: 100vh;
            left: 0px;
            top: 0px;
            cursor: pointer;
            text-align: center;
            font-family: Poppins;
            font-size: 15px;
            background-color: ${colors.white};
          }

          ul {
            padding: 0;
            padding-left: 20px;

            text-align: start;
            align-content: center;
            list-style-type: none;
          }

          li {
            width: 100%;
            padding: 1%;
            padding-top: 50px;
          }

          nav li img {
            padding-right: 20px;
          }

          li:hover {
            background-color: ${colors.violetBase};
            color: ${colors.base};
            text-decoration-color: aqua;
          }

          nav description {
            max-width: 2px;
            font-size: 10px;
            text-align: left;
          }

          nav p {
            margin-top: 1vh;
          }

          nav img {
            padding-top: 5vh;
          }
        `}</style>
      </>
    </AppLayout>
  )
}
