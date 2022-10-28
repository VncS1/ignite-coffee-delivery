import styled from "styled-components";
import backgroundImage from '../../../../assets/background.svg'

export const IntroContainer = styled.div`
    width: 100%;

    background: url(${backgroundImage}) center center no-repeat;
    background-size: cover;

    padding: 7rem 9rem;

    display: flex;
    align-items: center;
    justify-content: center;

    .left-items {
        display: flex;
        flex-direction: column;
    }

    .homeImage {
    }
`

export const TitleContainer = styled.div`
    max-width: 70%;

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
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem 1rem;

    flex-wrap: wrap;


    max-width: 70%;

    margin-top: 3rem;


`