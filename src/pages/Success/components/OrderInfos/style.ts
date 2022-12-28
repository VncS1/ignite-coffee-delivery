import styled from "styled-components";

import { MapPin, Timer, CurrencyDollar } from "phosphor-react";

export const OrderInfosContainer = styled.div`
    
    
    position: relative;

    border: 1px solid transparent;


    background: ${props => props.theme.background};
    background-clip: padding-box;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    border-top-right-radius: 48px;
    border-bottom-left-radius: 48px;

    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;

    &::after {
        position: absolute;
        top: -1px;
        bottom: -1px;
        right: -1px;
        left: -1px;

        background: linear-gradient(
            to right,
            ${props => props.theme.purple},
            ${props => props.theme.yellow}
        );

        content: '';
        z-index: -1;

        border-top-right-radius: 48px;
        border-bottom-left-radius: 48px;

        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    /* .infos {
        background: ${props => props.theme.background};
        padding: 2.5rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    } */
`

export const OrderInfo = styled.div`
    display: flex;
    align-items: center;

    span.main-text {
        margin-left: 0.75rem;
        line-height: 130%;
        color: ${props => props.theme["base-text"]};
    }

    .text-bold {
        font-weight: bold;
    }


`




export const PinIcon = styled(MapPin)`
    color: ${props => props.theme.background};
    background: ${props => props.theme.purple};
    border-radius: 50%;
    padding: 0.5rem;

    
`

export const DollarIcon = styled(CurrencyDollar)`
    color: ${props => props.theme.background};
    background: ${props => props.theme["yellow-dark"]};
    border-radius: 50%;
    padding: 0.5rem;
`

export const TimerIcon = styled(Timer)`
    color: ${props => props.theme.background};
    background: ${props => props.theme.yellow};
    border-radius: 50%;
    padding: 0.5rem;
`