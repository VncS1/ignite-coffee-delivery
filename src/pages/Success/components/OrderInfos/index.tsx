import {
    OrderInfosContainer,
    PinIcon,
    TimerIcon,
    DollarIcon,
    OrderInfo
} from "./style"

export function OrderInfos() {
    return (
        <OrderInfosContainer>
            
                <OrderInfo>
                    <PinIcon size={32} weight="fill" />
                    <span className="main-text">
                        Entrega em <span className="text-bold">Rua João Daniel Martineli, 102</span><br />
                        Farrapos - Porto Alegre, RS
                    </span>
                </OrderInfo>
                <OrderInfo>
                    <TimerIcon size={32} weight="fill" />
                    <span className="main-text">
                        Previsão de Entrega<br />
                        <span className="text-bold">20 min - 30 min</span>
                    </span>
                </OrderInfo>
                <OrderInfo>
                    <DollarIcon size={32} weight="fill" />
                    <span className="main-text">
                        Pagamento na Entrega<br />
                        <span className="text-bold">Cartão de Crédito</span>
                    </span>
                </OrderInfo>
            
        </OrderInfosContainer>
    )
}