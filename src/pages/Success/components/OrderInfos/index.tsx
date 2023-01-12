import { useContext } from "react"
import { PurchaseContext } from "../../../../contexts/PurchaseContext"
import {
    OrderInfosContainer,
    PinIcon,
    TimerIcon,
    DollarIcon,
    OrderInfo
} from "./style"

export function OrderInfos() {
    const { purchase } = useContext(PurchaseContext)
    console.log(purchase)
    return (
        <OrderInfosContainer>
            
                <OrderInfo>
                    <PinIcon size={32} weight="fill" />
                    <span className="main-text">
                        Entrega em <span className="text-bold">Rua {purchase.rua}, {purchase.num}</span><br />
                        {purchase.bairro} - {purchase.cidade}, {purchase.uf}
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
                        <span className="text-bold">{purchase.pagamento}</span>
                    </span>
                </OrderInfo>
            
        </OrderInfosContainer>
    )
}