import { createContext, ReactNode, useState } from "react";

export interface PurchaseProps {
    cep: string
    rua: string
    num: string
    complemento?: string
    cidade: string
    bairro: string
    uf: string
    pagamento: string
}

interface PurchaseContexData {
    purchase: PurchaseProps
    handleCreatePurchase: (purchase: PurchaseProps) => void
    handleSetPaymentMethod: (paymentMethod: string) => void
}

export const PurchaseContext = createContext<PurchaseContexData>({} as PurchaseContexData)

interface PurchaseContextProviderProps {
    children: ReactNode
}

export function PurchaseContextProvider({ children }: PurchaseContextProviderProps) {
    const [purchase, setPurchase] = useState<PurchaseProps>({} as PurchaseProps)
    
    console.log(purchase)

    function handleCreatePurchase(purchase: PurchaseProps) {
        setPurchase(purchase)
        console.log(purchase)
    }

    function handleSetPaymentMethod(paymentMethod: string) {
        setPurchase({
            ...purchase,
            pagamento: paymentMethod
        })

        console.log(purchase)
    }

    return (
        <PurchaseContext.Provider
            value={{
                purchase,
                handleCreatePurchase,
                handleSetPaymentMethod
            }}
        >
            {children}
        </PurchaseContext.Provider>
    )
}