import { CartIcon, CoffeeContainer, CoffeeInfos } from "./style";

import { QuantityForm } from "../../../../../components/QuantityForm";

interface CoffeeProps {
    image: string
    type: string[]
    name: string;
    description: string;

}

export function Coffee({ image, type, name, description }: CoffeeProps) {
    return (
        // Ordenar com display grid: 1fr 1fr 1fr 1fr 1fr (5 colunas)
        <CoffeeContainer>
            <img src={image} />
            <CoffeeInfos>
                <div className="coffee-types">
                    {type.map(type => {
                        return (
                            <div className="type">
                                {type}
                            </div>
                        )
                    })}
                </div>
                <span className="coffee-name">
                    {name}
                </span>
                <span className="coffee-description">
                    {description}
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