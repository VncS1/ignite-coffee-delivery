import { CartIcon, CoffeeContainer, CoffeeInfos } from "./style";

import { QuantityForm } from "../../../../../components/QuantityForm";
import { useContext, useState } from "react";
import { CoffeesContext } from "../../../../../contexts/CoffeesContext";

interface CoffeeProps {
    id: number
    image: string
    type: string[]
    name: string;
    description: string;
}

export function Coffee({ id, image, type, name, description }: CoffeeProps) {

    const { setCoffees, coffees } = useContext(CoffeesContext)

    const [quantity, setQuantity] = useState(0);

    function handleAddToCart() {
        if (quantity === 0) {
            return
        }

        let coffeeExists = false;
        let coffeeQuantity = 0

        coffees.map(coffee => {
            if (coffee.id === id) {
                coffeeExists = true;
                //quantidade antiga
                if (coffeeQuantity !== quantity) {
                    setCoffees(coffees.map(coffee => {
                        if (coffee.id === id) {
                            return {
                                ...coffee,
                                quantity //atualizar a quantidade
                            }
                        }
                        return coffee
                    }))
                }
            }
        })

        if (coffeeExists) {
            return console.log("Carrinho atualizado")
        } else {
            setCoffees([...coffees, {
                id,
                image,
                type,
                name,
                description,
                quantity
            }])
        }

    }

    return (
        <CoffeeContainer>
            <img src={image} />
            <CoffeeInfos>
                <div className="coffee-types">
                    {type.map(type => {
                        return (
                            <div
                                key={type}
                                className="type"
                            >
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
                        <QuantityForm
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <button onClick={handleAddToCart} type="button" className="add-to-cart">
                            <CartIcon size={24} weight="fill" />
                        </button>
                    </form>
                </div>
            </CoffeeInfos>
        </CoffeeContainer>
    )
}