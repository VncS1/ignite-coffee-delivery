import { Header } from "../../components/Header";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./style";


export function Checkout() {
  return (
    <CheckoutContainer>
        <Header />
        <CheckoutForm />
    </CheckoutContainer>
  )
}