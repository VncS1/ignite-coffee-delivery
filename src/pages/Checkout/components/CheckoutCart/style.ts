import { Trash } from "phosphor-react";
import styled from "styled-components";

export const CartContainer = styled.main`
    width: 100%;
    padding: 2.5rem;
    background: ${props => props.theme["base-color"]};
    border-radius: 8px;	
    max-width: 448px;

    border-top-right-radius: 32px;
    border-bottom-left-radius: 32px;

    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const CartItem = styled.div`
    width: 100%;

    

    .item {
        display: flex;
        align-items: center;

        
        

        img {
            width: 4rem;
            height: 4rem;
            margin-right: 1.25rem;
        }

        
        

        .product-info {
            display: flex;

            .product-name {
                font-size: 1rem;
                color: ${props => props.theme["subtitle"]};
                
            }

            .edit-product {
                display: flex;

                .remove-button {
                    display: flex;
                    align-items: center;

                    font-size: 0.75rem;
                    

                    background-color: ${props => props.theme["base-button"]};
                    padding: 0 0.5rem;

                    gap: 0.25rem;

                    border-radius: 8px;
                    border: 0;
                    color: ${props => props.theme["base-text"]};	
                    cursor: pointer;
                    outline: none;
                }
            }
        }

        .product-price {
            color: ${props => props.theme["base-text"]};
            font-weight: bold;
        }
    }

    .line {
        margin: 1.5rem 0;  
        color: ${props => props.theme["base-button"]};   
        opacity: 0.3;
    }
`

export const ItemPrice = styled.div`

`

export const TrashIcon = styled(Trash)`
    color: ${props => props.theme['purple']};	
`