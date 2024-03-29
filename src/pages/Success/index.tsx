import {
    ImageContainer,
    InfosContainer,
    SuccessContainer,
    TextContainer
} from "./style";

import successfulImage from '../../assets/successful-order-image.png';
import { OrderInfos } from "./components/OrderInfos";

export function Success() {
    return (
        <SuccessContainer>
            <InfosContainer>
                <TextContainer>
                    <h3>Uhu! Pedido confirmado</h3>
                    <span>Agora é só aguardar que logo o café chegará até você!</span>
                </TextContainer>
                <OrderInfos />
            </InfosContainer>
            <ImageContainer>
                <img src={successfulImage} alt="Successful order" />
            </ImageContainer>
        </SuccessContainer>
    )
}