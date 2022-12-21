import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 3rem;
    

    max-width: 75%;
    margin: 0 auto;

    
`

export const Title = styled.h1`
    max-width: 100%;

    font-family: 'Baloo Bhai 2', sans-serif;
    display: flex;
    justify-content: flex-start;

    margin: 0 auto;
    padding: 0 0 2rem 1.5rem;

`

export const CoffeesContainer = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem 0;
    justify-items: center;
    

    @media (max-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

    @media (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    @media (max-width: 425px){
        grid-template-columns: 1fr;
        gap: 1rem 0;
        margin: 0 auto;
    }
`