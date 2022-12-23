import { Header } from "../../components/Header";
import { CheckoutCart } from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./style";


export function Checkout() {
  return (
    <CheckoutContainer>
        <Header />
        <CheckoutForm />
        <CheckoutCart />
    </CheckoutContainer>
  )
}