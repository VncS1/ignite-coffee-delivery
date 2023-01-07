import { Minus, Plus } from "phosphor-react";
import styled from "styled-components";

export const QuantityFormContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
        
    

    .button-quantity {
        display: flex;
        border: 0;
        cursor: pointer;

        box-shadow: none;
        border-color: transparent;
    
    }

    .quantity {
        border: 0;
        height: 38px;
        text-align: center;
        max-width: 25px;
        background: ${props => props.theme["base-button"]};  
        font-size: 1rem ;
        font-family: 'Roboto', sans-serif;
        box-shadow: none;
        border-color: transparent;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        
    }
    input[type="number"] {
        -moz-appearance: textfield;        
    }
`
export const PlusIcon = styled(Plus)`
    color: ${props => props.theme['purple-dark']};
    background: ${props => props.theme["base-button"]};
    height: 38px;
    padding-right: 0.25rem;

    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    margin-right: 8px;

    cursor: pointer;

`

export const MinusIcon = styled(Minus)`
    color: ${props => props.theme['purple-dark']};
    background: ${props => props.theme["base-button"]};    
    height: 38px;
    padding-left: 0.25rem;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;

    cursor: pointer;
`