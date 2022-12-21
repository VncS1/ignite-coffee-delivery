import styled from "styled-components";
import backgroundImage from '../../../../assets/background.svg'

export const Container = styled.div`
    width: 100%;

    background: url(${backgroundImage}) center center no-repeat;
    background-size: cover;



    @media(max-width: 500px){
        background-size: 100% 100%;
    }
`

export const Content = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 6.75rem 0;

    
    display: flex;
    align-items: center;
    gap: 3.5rem;


    @media(max-width: 1200px){
        width: 100%;
        max-width: 600px;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 768px){
        max-width: 80%;
    }


    .left-items {
        display: flex;
        flex-direction: column;
    }

    .homeImage {
        width: 100%;
    }
`


export const TitleContainer = styled.div`
    h1 {
        font-family: 'Baloo Bhai 2', sans-serif;
        line-height: 3rem;
        font-size: 3rem;

        margin-bottom: 1rem;
        overflow-y: hidden;
    }

    span {
        font-size: 1.25rem;
    }
`

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    max-width: 650px;
    gap: 1.25rem;

    margin-top: 3rem;

    @media(max-width: 500px){
        grid-template-columns: 1fr;
        align-content: center;
    }

`