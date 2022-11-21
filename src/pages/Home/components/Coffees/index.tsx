import { Coffee } from "./Coffee";
import { CoffeesContainer, Title } from "./style";

export function Coffees() {
    return (

        // Ordenar com display grid: 1fr 1fr 1fr 1fr 1fr (5 colunas)
        <div>
            <Title>Nossos Cafés</Title>
            <CoffeesContainer>
                
                <Coffee />
                <Coffee />
                <Coffee />
                <Coffee />

                <Coffee />
                <Coffee />
                <Coffee />
                <Coffee />

            </CoffeesContainer>
        </div>
    )
}