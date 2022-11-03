import styled from 'styled-components'
import { ShoppingCart, MapPin } from 'phosphor-react'


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    @media(max-width: 1200px){
        width: 100%;
        max-width: 600px;
    }

    @media(max-width: 768px){
        max-width: 80%;
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
            font-size: .875rem;
            color: ${props => props.theme['purple']};
        }
    }

    
    
    @media(max-width: 400px){
        margin-top: 1rem;
    }
`