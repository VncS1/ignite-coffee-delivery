import { useContext, useMemo } from "react";
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


    //só chama as operações caso aconteça alguma mudança no coffees
    const values = useMemo(() => {
        if (!coffeesCount) return { totalItems: 0, itemsPrice: 0, finalPrice: 0 }

        //pegando a soma da quantidade de todos os produtos no carrinho, com valor inicial de 0

        const totalItems = coffees.reduce((acc, coffee) => {
            return acc + coffee.quantity
        }, 0)

        return {
            totalItems,
            itemsPrice: totalItems * 9.9,
            finalPrice: (totalItems * 9.9) + 3.5
        }
    }, [coffees])


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
        } else {
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
                    <span className="price">R$ {values.itemsPrice.toFixed(2)}</span>
                </div>
                <div className="shipping">
                    <span className="shipping-text">Entrega</span>
                    <span className="shipping-value">R$ 3,50</span>
                </div>
                <div className="final-price">
                    <span className="final-price-text">Total</span>
                    <span className="final-price-value">R$ {values.finalPrice.toFixed(2)}</span>
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