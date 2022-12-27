import styled from "styled-components";


export const CheckoutContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;    


    display: flex;
    justify-content: space-between;

    gap: 2rem;

    .checkout-title {
        font-size: 1.125rem;
        font-family: 'Baloo Bhai 2', cursive;
    }

    .checkout-form {
        max-width: 640px;
    }

    .checkout-cart {
        max-width: 448px;
    }
    

    @media (max-width: 1140px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 0 auto;
    }

    
    @media (max-width: 1280px){
        .checkout-cart, .checkout-form {
            max-width: 640px;
            width: 100%;
        }
    }

    @media (max-width: 525px){
        width: 90%;
        margin: 0 auto;

        .checkout-cart {
            width: 100%;
        }
    }
    

    
`