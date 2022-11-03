import styled from "styled-components";
import { ShoppingCart } from "phosphor-react";



export const CoffeeContainer = styled.div`
    max-width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
        

    img {
        z-index: 1000;
        margin-bottom: -9rem;
    }
`

export const CoffeeInfos = styled.div`
    max-width: 256px;
    height: 310px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;
    padding: 0 1.25rem;

    border-top-right-radius: 32px;
    border-bottom-left-radius: 32px;

    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: ${props => props.theme["base-color"]};

    z-index: -999;

    .coffee-types {
        margin-top: 90px;

        .type {
            color: ${props => props.theme['yellow-dark']};
            background: ${props => props.theme['yellow-light']};
            padding: 0.25rem .5rem;
            width: 81px;
            font-size: 0.625rem;

            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            border-radius: 12px;
        }
    }

    .coffee-name {
        font-family: 'Baloo Bhai 2', sans-serif;
        line-height: 3rem;
        font-size: 1.25rem;
    }

    .coffee-description {
        font-size: 0.875rem;
        text-align: center;
        line-height: 130%;
        color: ${props => props.theme['description-text']};
        margin-bottom: 1rem;
    }

`

export const CartIcon = styled(ShoppingCart)`
    color: ${props => props.theme['background']};
`
