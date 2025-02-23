import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
    }

    body {
        font-family: "Poppins", serif;
        font-weight: 400;
        font-style: normal;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #black;
    }
`


export default GlobalStyles;