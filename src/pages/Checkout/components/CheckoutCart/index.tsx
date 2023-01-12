import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { PurchaseContext, PurchaseProps } from "../../../../contexts/PurchaseContext";
import { CartItem } from "./components/CartItem";
import { CartContainer, FinalPrice, CheckoutButton } from "./style";

export function CheckoutCart() {
    const { coffees, handleClearCart } = useContext(CoffeesContext)
    const { handleSubmit, reset } = useFormContext()
    const { handleCreatePurchase } = useContext(PurchaseContext)

    const coffeesCount = !!coffees?.length

    //pegando a soma da quantidade de todos os produtos no carrinho, com valor inicial de 0
    const totalItems = coffees.reduce((acc, coffee) => {
        return acc + coffee.quantity
    }, 0)

    let itemsPrice = totalItems * 9.9

    //Preço de todos os items são 9,90, então só multiplico pela qtd de items no carrinho
    //somando com o preço fixo do frete
    let finalPrice = (totalItems * 9.9) + 3.5

    

    const routeChange = () => {
        let path = `/success`
        navigate(path)
    }

    function handleChangeRoute() {
        routeChange()
    }

    function handleCreatePurchaseSubmit(data: PurchaseProps) {
        if (coffeesCount) {
            handleCreatePurchase(data)
            handleChangeRoute()
            handleClearCart()
            reset()
        }else {
            alert('Carrinho está vazio!')
        }

    }

    const navigate = useNavigate()



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
                                price={coffee.price}
                                quantityItems={coffee.quantity}
                            />
                        )
                    })
                ) : (
                    <div className="empty-cart">
                        <span className="empty-cart-text">Seu carrinho está vazio :(</span>
                    </div>
                )}
            </div>
            <FinalPrice>
                <div className="total-items">
                    <span className="total-items-text">Total de itens</span>
                    <span className="price">R$ {itemsPrice.toFixed(2)}</span>
                </div>
                <div className="shipping">
                    <span className="shipping-text">Entrega</span>
                    <span className="shipping-value">R$ 3,50</span>
                </div>
                <div className="final-price">
                    <span className="final-price-text">Total</span>
                    <span className="final-price-value">R$ {finalPrice.toFixed(2)}</span>
                </div>
            </FinalPrice>
            {/*//@ts-ignore */}
            <form action="#" onSubmit={handleSubmit(handleCreatePurchaseSubmit)}>
                <CheckoutButton type="submit">
                    Confirmar Pedido
                </CheckoutButton>
            </form>
        </CartContainer>
    );
}