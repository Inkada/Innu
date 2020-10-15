import css from "styled-jsx/css"

// import {breakpoints, colors, fonts} from '../../Estilos/theme'
export default css`
  div {
    display: grid;
    font-family: Poppins, sans-serif;
    height: 100vh;
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
