import styled from "styled-components";
import { ShoppingCart, Plus, Minus } from "phosphor-react";



export const CoffeeContainer = styled.div`
    min-width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
        

    img {
        z-index: 1;
        margin-bottom: -10rem;
        width: 120px;
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

    

    .coffee-types {
        margin-top: 120px;
        display: flex;
        gap: 0.25rem;

        .type {
            color: ${props => props.theme['yellow-dark']};
            background: ${props => props.theme['yellow-light']};
            padding: 0.25rem 0.4rem;
            
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
        color: ${props => props.theme['base-text']}
    }

    .coffee-description {
        font-size: 0.875rem;
        text-align: center;
        line-height: 20px;
        color: ${props => props.theme['description-text']};
        margin-bottom: 1rem;
        
    }

    .coffee-price {
        display: flex;
        justify-content: space-between;

        width: 90%;
        align-items: center;

        


        .price {
            font-size: 1.5rem;
            font-weight: bold;
            font-family: 'Baloo Bhai 2', sans-serif;
            line-height: 3rem;

            display: flex;
            align-items: center;        
            color: ${props => props.theme['base-text']};


            .cifra {
                font-family: 'Roboto', sans-serif;
                font-size: 0.875rem;
                font-weight: 400;
                margin-right: 4px;
                
            }
        }

        

        .price-forms {
            display: flex;

            

            .add-to-cart {
                background: ${props => props.theme["purple-dark"]};
                border: 0;
                border-radius: 8px;
                width: 38px;
                
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                box-shadow: none;
                border-color: transparent;

                &:disabled {
                    cursor: not-allowed;
                }
            }

            
            
        }

        
    }
`

export const CartIcon = styled(ShoppingCart)`
    color: ${props => props.theme['background']}; 
`
