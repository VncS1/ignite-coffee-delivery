import { CartContainer, HeaderContainer, LocaleContainer } from "./style";

import logo from '../../assets/logo.png'

import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} />

            <LocaleContainer>
                <MapPin size={24} />
            </LocaleContainer>
            <CartContainer>
                <ShoppingCart size={24} />
            </CartContainer>
        </HeaderContainer>
    );
}