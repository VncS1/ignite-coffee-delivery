import { Coffee } from "./Coffee";
import { CoffeesContainer, Title, MainContainer } from "./style";

import { coffees } from "./products/products";

export function Coffees() {
    return (

        // Ordenar com display grid: 1fr 1fr 1fr 1fr 1fr (5 colunas)
        <MainContainer>
            <Title>Nossos Cafés</Title>
            <CoffeesContainer>

                {coffees.map(coffee => {
                    return (
                        <Coffee 
                            key={coffee.id}
                            id = {coffee.id}
                            image={coffee.image}
                            type={coffee.type}
                            name={coffee.name}
                            description={coffee.description}
                        />
                    )
                })}
                

            </CoffeesContainer>
        </MainContainer>
    )
}