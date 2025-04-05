import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", Helvetica, sans-serif;
        font-weight: 400;
        font-style: normal;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #3e3838;
        background: #fffaed;
        //max-width: 100vw;
    }

    html {
  scroll-behavior: smooth;
}
`


export default GlobalStyles;