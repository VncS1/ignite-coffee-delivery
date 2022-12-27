import { CartItem } from "./components/CartItem";
import { CartContainer, FinalPrice, CheckoutButton } from "./style";


export function CheckoutCart() {
    return (
        <CartContainer>
            <div className="products">
                <CartItem />
                <CartItem />
            </div>
            <FinalPrice>
                <div className="total-items">
                    <span className="total-items-text">Total de itens</span>
                    <span className="price">R$ 10,00</span>
                </div>
                <div className="shipping">
                    <span className="shipping-text">Entrega</span>
                    <span className="shipping-value">R$ 3,50</span>
                </div>
                <div className="final-price">
                    <span className="final-price-text">Total</span>
                    <span className="final-price-value">R$ 13,50</span>
                </div>
            </FinalPrice>
            <CheckoutButton type="button">
                Confirmar Pedido
            </CheckoutButton>
        </CartContainer>
    );
}