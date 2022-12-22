import styled from "styled-components";
import { MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";


export const MainContainer = styled.main`
    width: 100%;
`

export const FormContainer = styled.div`
    width: 100%;
    background: ${props => props.theme["base-color"]};
    border-radius: 8px;	
    padding: 2.5rem;
    max-width: 640px;
    margin-bottom: 0.75rem;

    form {
        width: 100%;
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
            grid-template-areas: 
                "cep cep . . .
                 rua rua rua rua rua
                 numero numero complemento complemento complemento
                 bairro bairro cidade cidade uf
                "
            ;

            input {
                border: 0;
                border-radius: 8px;

                background-color: ${props => props.theme["base-input"]};
                padding: 0.75rem;

                font-size: 0.875rem;
            }

            input.cep{
                grid-area: cep;
            }

            input.rua{
                grid-area: rua;
            }

            input.num{
                grid-area: numero;
            }

            input.complemento{
                grid-area: complemento;
            }

            input.bairro{
                grid-area: bairro;
            }

            input.cidade{
                grid-area: cidade;
            }

            input.uf{
                grid-area: uf;
            }
        }
    }
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
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem;
    }
`

export const PaymentMethod = styled.div`
    display: flex;
    align-items: center;

    width: 175px;

    font-size: 0.7rem;

    background-color: ${props => props.theme["base-button"]};
    padding: 1rem;

    gap: 0.30rem;

    border-radius: 8px;
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