import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", serif;
        font-weight: 400;
        font-style: normal;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #2d2b2b;
        background: #BDB153;
        //max-width: 100vw;
    }
`


export default GlobalStyles;