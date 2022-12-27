import { Trash } from "phosphor-react";
import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 100%;
    .item {
        display: flex;
        justify-content: space-between;

        img {
            width: 4.5rem;
            height: 4.5rem;
            margin-right: 1rem;
        }

        .product-info {
            display: flex;
            .product-name {
                font-size: 1rem;
                color: ${props => props.theme["subtitle"]};
                padding-bottom: 0 0 0.5rem 0;
                
            }

            .edit-product {
                display: flex;
                margin-top: .5rem;

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

                    @media(max-width: 425px ){
                        > span {
                            display: none;
                        }
                    }
                }
            }
        }

        .product-price {
            color: ${props => props.theme["base-text"]};
            font-weight: bold;
            font-size: 1rem;

            white-space: nowrap;
        }
    }

    .line {
        margin: 1.5rem 0;  
        color: ${props => props.theme["base-button"]};   
        opacity: 0.3;
    }

`


export const TrashIcon = styled(Trash)`
    color: ${props => props.theme['purple']};	
`