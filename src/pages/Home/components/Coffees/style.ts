import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`

export const Title = styled.h1`
    max-width: 75%;

    font-family: 'Baloo Bhai 2', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;

    margin-bottom: 3.5rem;
`

export const CoffeesContainer = styled.div`
    width: 75%;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem 0;
    justify-items: center
    
`