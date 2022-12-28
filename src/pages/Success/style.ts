import styled from "styled-components";

export const SuccessContainer = styled.main `
    max-width: 1120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 4rem auto;


    @media(max-width: 1200px){
        width: 100%;
        max-width: 600px;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    @media(max-width: 768px){
        max-width: 80%;
    }

    @media(max-width: 425px){
        
    }
`

export const InfosContainer = styled.div `
    max-width: 526px;
    
`

export const TextContainer = styled.div `
    margin-bottom: 1.5rem;

    h3 {
        font-family: 'Baloo Bhai 2', sans-serif;
        font-weight: bold;
        font-size: 2rem;
        color: ${props => props.theme["yellow-dark"]};
    }

    span {
        font-size: 1.25rem;
        color: ${props => props.theme["subtitle"]};
    }
`


export const ImageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    img {
        @media(max-width: 525px){
            width: 100%;
        }   
    }
`

