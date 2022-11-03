import { CartIcon, CoffeeContainer, CoffeeInfos } from "./style";

import coffeeImg from '../../../../../assets/coffee-images/americano.png';

export function Coffee() {
    return (
        // Ordenar com display grid: 1fr 1fr 1fr 1fr 1fr (5 colunas)
        <CoffeeContainer>
            <img src={coffeeImg} />
            <CoffeeInfos>
                <div className="coffee-types">
                    <div className="type">
                        Tradicional
                    </div>
                </div>
                <span className="coffee-name">
                    Expresso Tradicional
                </span>
                <span className="coffee-description">
                    O tradicional café feito com água quente e grãos moídos
                </span>

                <div className="coffee-price">
                    <span className="price"><span className="cifra">R$</span> 9,90</span>
                    <input type="number" className="quantity" min="1" defaultValue="0" />
                    <button className="add-to-cart"><CartIcon /></button>
                </div>
            </CoffeeInfos>
        </CoffeeContainer>
    )
}