import css from "styled-jsx/css"

// import {breakpoints, colors, fonts} from '../../Estilos/theme'
import { breakpoints } from "../../Estilos/theme"

export default css`
div {
    display: grid;
    height: 100vh;
  }
  
  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }    
  `

export const globalStyles = css.global`
  html,
  body {
    padding: 100;
    margin: 0;
    font-family: Poppins, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
