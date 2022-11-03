import styled from "styled-components";

export const ItemContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 0.75rem;

    

    >div {
        background: ${props => props.color}; //Pegando a cor pelas propriedades do componente
        border-radius: 999px;

        min-width: 32px;
        height: 32px;

        display: flex;
        justify-content: center;
        align-items: center;
    }


`