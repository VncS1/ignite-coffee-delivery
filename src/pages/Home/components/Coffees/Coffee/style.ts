import styled from "styled-components";
import { ShoppingCart, Plus, Minus } from "phosphor-react";



export const CoffeeContainer = styled.div`
    min-width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
        

    img {
        z-index: 1000;
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

    z-index: -999;

    .coffee-types {
        margin-top: 120px;

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

            .quantity-form {
                display: flex;
                justify-content: center;
                align-items: center;
                

                .button-quantity {
                    display: flex;
                    border: 0;
                    cursor: pointer;
                }

                .quantity {
                    border: 0;
                    height: 38px;
                    text-align: center;
                    max-width: 25px;
                    background: ${props => props.theme["base-button"]};  
                    font-size: 1rem ;
                    font-family: 'Roboto', sans-serif;
                    

                }

                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type="number"] {
                    -moz-appearance: textfield;
                    
                }
            }

            .add-to-cart {
                background: ${props => props.theme["purple-dark"]};
                border: 0;
                border-radius: 8px;
                width: 38px;
                
                display: flex;
                justify-content: center;
                align-items: center;
            }

            
            
        }

        
    }
`

export const CartIcon = styled(ShoppingCart)`
    color: ${props => props.theme['background']};
`
export const PlusIcon = styled(Plus)`
    color: ${props => props.theme['purple-dark']};
    background: ${props => props.theme["base-button"]};
    height: 38px;
    padding-right: 0.25rem;

    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    margin-right: 8px;

`

export const MinusIcon = styled(Minus)`
    color: ${props => props.theme['purple-dark']};
    background: ${props => props.theme["base-button"]};    
    height: 38px;
    padding-left: 0.25rem;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;

`