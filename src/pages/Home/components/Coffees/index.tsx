import { Coffee } from "./Coffee";
import { CoffeesContainer, Title, MainContainer } from "./style";

import tradicionalImg from '../../../../assets/coffee-images/americano.png'

const coffees = [
    {
        image: tradicionalImg,
        type: ['Tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {   

        type: ['Tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
    },
]

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