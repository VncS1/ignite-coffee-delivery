import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { CartItem } from "./components/CartItem";
import { CartContainer, FinalPrice, CheckoutButton } from "./style";


export function CheckoutCart() {
    const { coffees } = useContext(CoffeesContext)

    const coffeesCount = !!coffees?.length

    return (
        <CartContainer>
            <div className="products">
                {coffeesCount ? (
                    coffees.map(coffee => {
                        return (
                            <CartItem 
                                key={coffee.id}
                                id={coffee.id}
                                image={coffee.image}
                                name={coffee.name}
                                quantityItems={coffee.quantity}
                            />
                        )
                    })
                ): (
                    <div className="empty-cart">
                        <span className="empty-cart-text">Seu carrinho está vazio :(</span>
                    </div>  
                )}
            </div>
            <FinalPrice>
                <div className="total-items">
                    <span className="total-items-text">Total de itens</span>
                    <span className="price">R$ 0</span>
                </div>
                <div className="shipping">
                    <span className="shipping-text">Entrega</span>
                    <span className="shipping-value">R$ 0</span>
                </div>
                <div className="final-price">
                    <span className="final-price-text">Total</span>
                    <span className="final-price-value">R$ 0</span>
                </div>
            </FinalPrice>
            <CheckoutButton type="button">
                Confirmar Pedido
            </CheckoutButton>
        </CartContainer>
    );
}