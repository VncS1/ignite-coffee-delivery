import styled from "styled-components";
import backgroundImage from '../../../../assets/background.svg'

export const Container = styled.div`
    width: 100%;
    

    background: url(${backgroundImage}) center center no-repeat;
    background-size: cover;

`

export const Content = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;

    padding: 6rem 0;

    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;

    .left-items {
        display: flex;
        flex-direction: column;
    }
`


export const TitleContainer = styled.div`
    h1 {
        font-family: 'Baloo Bhai 2', sans-serif;
        line-height: 3rem;
        font-size: 3rem;

        margin-bottom: 1rem;
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


`