import { Header } from "../../components/Header";
import { CheckoutCart } from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./style";


export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="checkout-form">
        <span className="checkout-title">Complete seu pedido</span>
        <CheckoutForm />
      </div>
      <div className="checkout-cart">
        <span className="checkout-title" >Cafés selecionados</span>

        <CheckoutCart />
      </div>
    </CheckoutContainer>
  )
}