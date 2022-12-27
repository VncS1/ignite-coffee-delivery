import styled from "styled-components";

export const CartContainer = styled.main`
    width: 100%;
    border: 1px solid red;
    padding: 2.5rem;
    background: ${props => props.theme["base-color"]};
    max-height: 498px;

    border-top-right-radius: 48px;
    border-bottom-left-radius: 48px;

    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;


    /* @media (max-width: 425px) {
        padding: 2rem .5rem;
        max-width: 95%;
        margin: 0 auto;
    } */
`

export const FinalPrice = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

    .total-items, .shipping, .final-price {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .total-items, .shipping {
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
        margin-bottom: 0.75rem;

        .price, .shipping-value {
            font-size: 1rem;
        }
    }

    .final-price {
        color: ${props => props.theme["subtitle"]};
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }
`
export const CheckoutButton = styled.button`
    color: ${props => props.theme.white};
    font-weight: bold;
    background: ${props => props.theme["yellow"]};

    margin-top: 0.75rem;
    padding: 0.75rem 0.5rem;
    
    border-radius: 4px;
    border: 0;

    width: 100%
`