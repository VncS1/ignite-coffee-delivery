import { Coffee } from "./Coffee";
import { CoffeesContainer } from "./style";

export function Coffees(){
    return (
        <CoffeesContainer>
            <h1>Nossos Cafés</h1>
            <Coffee />
        </CoffeesContainer>
    )
}