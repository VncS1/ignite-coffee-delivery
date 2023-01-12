import { InfosContainer, HeaderContainer, MapIcon, CartIcon } from "./style";

import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";


export function Header() {

    const { coffees } = useContext(CoffeesContext)

    const coffeeCount = !!coffees?.length

    return (
        <HeaderContainer>
            <NavLink to="/" className="link">
                <img src={logo}/>
            </NavLink>

            <InfosContainer>
                <div className="localeContainer">
                    <MapIcon size={24} weight="fill" />
                    <span className="locale">Poços de Caldas, MG</span>
                </div>

                <NavLink to="/checkout" className="buttonCart">
                    {coffeeCount && (
                        <div className="cartCount">{coffees.length}</div>
                    )}
                    <CartIcon size={24} weight="fill" />
                </NavLink>
            </InfosContainer>
        </HeaderContainer>
    );
}