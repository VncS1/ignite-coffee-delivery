import { CartIcon, CoffeeContainer, CoffeeInfos } from "./style"

import { QuantityForm } from "../../../../../components/QuantityForm"
import { useContext, useState } from "react"
import { CoffeesContext } from "../../../../../contexts/CoffeesContext"

interface CoffeeProps {
    id: number
    image: string
    type: string[]
    name: string
    description: string
    price: number
}

export function Coffee({id, image, type, name, description, price }: CoffeeProps) {

    const { setCoffees, coffees, handleAddToCart } = useContext(CoffeesContext)

    const [quantity, setQuantity] = useState(0)

    

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
                    <span className="price"><span className="cifra">R$</span> {price.toFixed(2)}</span>
                    <form className="price-forms" action="#">
                        <QuantityForm
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <button onClick={() => handleAddToCart({id, image, type, name, description, quantity, price})} disabled={quantity === 0} type="button" className="add-to-cart">
                            <CartIcon size={24} weight="fill" />
                        </button>
                    </form>
                </div>
            </CoffeeInfos>
        </CoffeeContainer>
    )
}