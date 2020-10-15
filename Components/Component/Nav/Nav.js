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
            Midiend o la cultura de innovación en las empresas
          </description>
          <Link href="/">
            <p>DASHBOARD</p>
          </Link>
          <ul>
            <Link href="/poblacion">
              <li>
                <img src="/poblacion.png" alt="Logo"></img>Población
              </li>
            </Link>
            <Link href="/analisis">
              <li>
                <img src="/analisis.png" alt="Logo"></img>Análisis
              </li>
            </Link>
            <Link href="/fIltros">
              <li>
                <img src="/filtros.png" alt="Logo"></img>Filtros
              </li>
            </Link>
            <Link href="/proyectos">
              <li>
                <img src="/proyectos.png" alt="Logo"></img>Proyectos
              </li>
            </Link>
            <Link href="/planes">
              <li>
                <img src="/planes.png" alt="Logo"></img>Planes
              </li>
            </Link>
          </ul>
          <ul>
            <Link href="/configuracion">
              <li>
                <img src="/configuracion.png" alt="Logo"></img>Configuración
              </li>
            </Link>
            <Link href="/ayuda">
              <li>
                <img src="/ayuda.png" alt="Logo"></img>Ayuda
              </li>
            </Link>
            <Link href="/login">
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

          nav ul {
            list-style-type: none;
            text-align: left;
          }

          nav li {
            padding: 1%;
          }

          nav li img {
            padding-right: 20px;
          }

          nav li:hover {
            background-color: ${colors.violetBase};

            color: ${colors.base};
          }
        `}</style>
      </>
    </AppLayout>
  )
}
