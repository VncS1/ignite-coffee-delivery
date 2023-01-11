import {
    OrderInfosContainer,
    PinIcon,
    TimerIcon,
    DollarIcon,
    OrderInfo
} from "./style"

interface OrderProps {
    rua: string
    numero: string
    bairro: string
    cidade: string
    uf: string
    pagamento: string
}

export function OrderInfos({rua, numero, bairro, cidade, uf, pagamento}: OrderProps) {
    return (
        <OrderInfosContainer>
            
                <OrderInfo>
                    <PinIcon size={32} weight="fill" />
                    <span className="main-text">
                        Entrega em <span className="text-bold">Rua {rua}, {numero}</span><br />
                        {bairro} - {cidade}, {uf}
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
                        <span className="text-bold">{pagamento}</span>
                    </span>
                </OrderInfo>
            
        </OrderInfosContainer>
    )
}