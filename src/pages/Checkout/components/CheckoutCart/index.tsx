import { CartContainer, CartItem, TrashIcon } from "./style";

import americano from '../../../../assets/coffee-images/americano.png';
import { QuantityForm } from "../../../../components/QuantityForm";

export function CheckoutCart() {
    return (
        <CartContainer>
            <div className="products">
                <CartItem>
                    <div className="item">

                        <div className="product-info">
                            <img src={americano} />
                            <div className="product-details">
                                <span className="product-name">Americano</span>
                                <div className="edit-product">
                                    <QuantityForm />
                                    <button type="button" className="remove-button"><TrashIcon size={16} />REMOVER</button>
                                </div>
                            </div>

                        </div>
                        <span className="product-price">R$ 5,00</span>
                    </div>

                    <hr className="line" />
                </CartItem>
                <CartItem>
                    <div className="item">

                        <div className="product-info">
                            <img src={americano} />
                            <div className="product-details">
                                <span className="product-name">Americano</span>
                                <div className="edit-product">
                                    <QuantityForm />
                                    <button type="button" className="remove-button"><TrashIcon size={16} />REMOVER</button>
                                </div>
                            </div>

                        </div>
                        <span className="product-price">R$ 5,00</span>
                    </div>

                    <hr className="line" />
                </CartItem>
            </div>
        </CartContainer>
    );
}