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
    
    function handleCreatePurchase(newPurchase: PurchaseProps) {
        
        setPurchase({
            ...newPurchase,
            pagamento: purchase.pagamento
        })
    }

    function handleSetPaymentMethod(paymentMethod: string) {
        setPurchase({
            ...purchase,
            pagamento: paymentMethod
        })
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