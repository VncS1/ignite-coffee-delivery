import { QuantityForm } from '../../../../../../components/QuantityForm';
import americano from '../../../../../../assets/coffee-images/americano.png';
import { ItemContainer, TrashIcon } from './style';

export function CartItem() {
    return (
        <ItemContainer>
            <div className="item">

                <div className="product-info">
                    <img src={americano} />
                    <div className="product-details">
                        <span className="product-name">Americano</span>
                        <div className="edit-product">
                            <QuantityForm />
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