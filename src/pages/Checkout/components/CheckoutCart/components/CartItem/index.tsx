import { QuantityForm } from '../../../../../../components/QuantityForm';
import americano from '../../../../../../assets/coffee-images/americano.png';
import { ItemContainer, TrashIcon } from './style';
import { useContext, useState } from 'react';
import { CoffeesContext } from '../../../../../../contexts/CoffeesContext';

interface CartProps {
    id: number
    image: string
    name: string
    quantityItems: number
}

export function CartItem({id, image, name, quantityItems}: CartProps) {
    const { coffees } = useContext(CoffeesContext)

    const [quantity, setQuantity] = useState(quantityItems);


    return (
        <ItemContainer>
            <div className="item">

                <div className="product-info">
                    <img src={image} />
                    <div className="product-details">
                        <span className="product-name">{name}</span>
                        <div className="edit-product">
                            <QuantityForm 
                                setQuantity={setQuantity}
                                quantity={quantity}
                            />
                            <button type="button" className="remove-button"><TrashIcon size={16} /><span>REMOVER</span></button>
                        </div>
                    </div>

                </div>
                <span className="product-price">R$ 5,00</span>
            </div>

            <hr className="line" />
        </ItemContainer>
    )
}