import styled from "styled-components";
import { ShoppingCart } from "phosphor-react";



export const CoffeeContainer = styled.div`

`

export const CoffeeInfos = styled.div `
    background-color: ${props => props.theme['base-color']};
    max-width: 256px;

`

export const CartIcon = styled(ShoppingCart)`
    color: ${props => props.theme['background']};
`
