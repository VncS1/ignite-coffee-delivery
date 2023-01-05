import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-title']};
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    body {
        background: ${(props) => props.theme['background']}; //Utilizando [] pois a variavel tem hífen
        color: ${(props) => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 768px){
    html {
        font-size: 87.5%; /* Ou seja, 14 px 
                            fica: 16px - 100%
                                  14px - x    -> Resultado: 87.5% */
    }
}
`