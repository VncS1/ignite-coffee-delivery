import { Coffee } from "./Coffee";
import { CoffeesContainer } from "./style";

export function Coffees(){
    return (
        
        // Ordenar com display grid: 1fr 1fr 1fr 1fr 1fr (5 colunas)
        <CoffeesContainer>
            <h1>Nossos Cafés</h1>
            <Coffee />
        </CoffeesContainer>
    )
}