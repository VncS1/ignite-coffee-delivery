import { CartIcon, CoffeeContainer, CoffeeInfos} from "./style";

import coffeeImg from '../../../../../assets/coffee-images/americano.png';
import { QuantityForm } from "../../../../../components/QuantityForm";

interface CoffeeProps {
    type: string[]
    name: string;
    description: string;

}

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
                    <form className="price-forms" action="#">
                        <QuantityForm />
                        <button onClick={() => console.log('teste')} type="submit" className="add-to-cart">
                            <CartIcon size={24} weight="fill" />
                        </button>
                    </form>
                </div>
            </CoffeeInfos>
        </CoffeeContainer>
    )
}