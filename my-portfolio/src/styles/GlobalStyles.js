import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
    }

    body {
        font-family: 'Courier New', serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`


export default GlobalStyles;