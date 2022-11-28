import { Coffee } from "./Coffee";
import { CoffeesContainer, Title, MainContainer } from "./style";

export function Coffees() {
    return (

        // Ordenar com display grid: 1fr 1fr 1fr 1fr 1fr (5 colunas)
        <MainContainer>
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

                <Coffee />
                <Coffee />

            </CoffeesContainer>
        </MainContainer>
    )
}