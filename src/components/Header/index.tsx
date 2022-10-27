import { InfosContainer, HeaderContainer, MapIcon, CartIcon } from "./style";

import logo from '../../assets/logo.png'


export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} />

            <InfosContainer>
                <div className="localeContainer">
                    <MapIcon size={24}/>
                    <span className="locale">Poços de Caldas, MG</span>
                </div>

                <button className="buttonCart">
                    <CartIcon size={24} />
                </button>
            </InfosContainer>
        </HeaderContainer>
    );
}