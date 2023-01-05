import { InfosContainer, HeaderContainer, MapIcon, CartIcon } from "./style";

import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";


export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} />

            <InfosContainer>
                <div className="localeContainer">
                    <MapIcon size={24} weight="fill" />
                    <span className="locale">Poços de Caldas, MG</span>
                </div>

                <NavLink to="/checkout" className="buttonCart">
                    <div className="cartCount">2</div>
                    <CartIcon size={24} weight="fill" />
                </NavLink>
            </InfosContainer>
        </HeaderContainer>
    );
}