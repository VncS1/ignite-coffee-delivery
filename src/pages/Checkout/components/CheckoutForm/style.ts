import styled from "styled-components";
import { MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";


export const MainContainer = styled.main`
    width: 100%;
`

export const FormContainer = styled.form`
    width: 100%;
    background: ${props => props.theme["base-color"]};
    border-radius: 8px;	
    padding: 2.5rem;
    
    margin-bottom: 0.75rem;

        .title-text {
            display: flex;
            align-items: flex-start;
            gap: .5rem;

            font-size: 1rem;
            color: ${props => props.theme["subtitle"]};

            margin-bottom: 2rem;

            .texts {
                display: flex;
                flex-direction: column;
                font-size: 0.875rem;

                color: ${props => props.theme["base-text"]};
            }
        }

        .input-container {
            width: 100%;
            display: grid;

            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            
            grid-template-areas: 
                "cep . ."
                "rua rua rua"
                "numero complemento complemento"
                "bairro cidade uf"
            ;

            grid-gap: 1rem 0.75rem;

            input {
                width: 100%;

                border: 0;
                border-radius: 8px;
                background-color: ${props => props.theme["base-input"]};
                padding: 0.75rem;

                font-size: 0.875rem;
            }

            .cep{
                grid-area: cep;
            }

            .rua{
                grid-area: rua;
            }

            .num{
                grid-area: numero;
            }

            .complemento{
                grid-area: complemento;
            }

            .bairro{
                grid-area: bairro;
            }

            .cidade{
                grid-area: cidade;
            }

            .uf{
                grid-area: uf;
            }

        }

        /* @media (max-width: 425px) {
            padding: 2rem .5rem;
            max-width: 95%;
            margin: 1rem auto;
        }
     */
`

export const PaymentMethods = styled.div`
    width: 100%;
    background: ${props => props.theme["base-color"]};
    border-radius: 8px;	
    padding: 2.5rem;
    max-width: 640px;

    .title-text {
        display: flex;
        align-items: flex-start;
        gap: .5rem;

        font-size: 1rem;
        color: ${props => props.theme["subtitle"]};

        margin-bottom: 2rem;

        .texts {
            display: flex;
            flex-direction: column;
            font-size: 0.875rem;

            color: ${props => props.theme["base-text"]};
        }   
    }

    .methods {
        form {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.75rem;
        }
    }

    /* @media (max-width: 425px) {
        padding: 2rem .5rem;
        width: 95%;
        margin: 0 auto;
    } */
`

export const PaymentMethod = styled.button`
    display: flex;
    align-items: center;
    
    width: 175px;

    font-size: 0.7rem;

    background-color: ${props => props.theme["base-button"]};
    padding: 1rem;

    gap: 0.30rem;

    border-radius: 8px;

    border: 1px solid transparent;
    box-shadow: none;
    
    cursor: pointer;


    &:focus {
        border: 1px solid ${props => props.theme["purple-light"]};
        background-color: ${props => props.theme['purple-light']};
        box-shadow: none;
        
    }

    @media(max-width: 768px){
        justify-content: center;
    }
`

export const MapPinIcon = styled(MapPinLine)`
    color: ${props => props.theme["yellow-dark"]};
`


export const DollarIcon = styled(CurrencyDollar)`
    color: ${props => props.theme["purple"]};
`

export const MoneyIcon = styled(Money)`
    color: ${props => props.theme["purple"]};
`

export const BankIcon = styled(Bank)`
    color: ${props => props.theme["purple"]};
`

export const CreditCardIcon = styled(CreditCard)`
    color: ${props => props.theme["purple"]};
`