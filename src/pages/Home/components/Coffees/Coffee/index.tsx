import { CartIcon, CoffeeContainer, CoffeeInfos, MinusIcon, PlusIcon } from "./style";

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
                    <div className="price-forms">
                        <div className="quantity-form">
                            <button type="button" className="button-quantity">
                                <MinusIcon size={20} weight="fill" />
                            </button>
                            <input type="number" className="quantity" min="1" defaultValue="0" />
                            <button type="button" className="button-quantity">
                                <PlusIcon size={20} weight="fill" />
                            </button>
                        </div>
                        <button onClick={() => console.log('teste')} type="button" className="add-to-cart">
                            <CartIcon size={24} weight="fill" />
                        </button>
                    </div>
                </div>
            </CoffeeInfos>
        </CoffeeContainer>
    )
}