import styled from 'styled-components'
import { ShoppingCart, MapPin } from 'phosphor-react'


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;

    padding: 2rem 8rem;

    width: 100%;

    @media(max-width: 650px){
        justify-content: center;
        align-items: center;

        padding: 1.5rem 1rem;
    }
    
`
export const MapIcon = styled(MapPin)`
    color: ${props => props.theme['purple']};
`

export const CartIcon = styled(ShoppingCart)`
    color: ${props => props.theme['yellow']};
`


export const InfosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    min-width: 30%;

    @media(max-width: 650px){
        min-width: 60%;
        margin-left: 1rem;
        align-items: center;

        
    }
    
    @media(max-width: 400px){
        margin-top: 1rem;
    }

    .buttonCart {
        background: ${props => props.theme['yellow-light']};
        border: 0;

        padding: .35rem .5rem;
        border-radius: 8px;

        margin-left: .5rem;
    }

    .localeContainer {
        background: ${props => props.theme['purple-light']};

        display: flex;
        align-items: center;
        

        border-radius: 8px;

        padding: 0.35rem .5rem;

        .locale {
            margin-left: .5rem;
            color: ${props => props.theme['purple']};
        }
    }
`