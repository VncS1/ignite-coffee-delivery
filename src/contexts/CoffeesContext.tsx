import { createContext, ReactNode, useState } from "react"

interface CartProps {
    id: number
    image: string
    type: string[]
    name: string
    description: string
    quantity: number
}

interface CoffeesContextData {
    coffees: CartProps[]
    setCoffees: (coffees: CartProps[]) => void
}

export const CoffeesContext = createContext<CoffeesContextData>({} as CoffeesContextData)

interface CoffeesContextProviderProps {
    children: ReactNode
}

export function CoffeesContextProvider({children}: CoffeesContextProviderProps) {
    const [coffees, setCoffees] = useState<CartProps[]>([])


    console.log(coffees)
    return (
        <CoffeesContext.Provider 
            value={{
                coffees,
                setCoffees
            }}
        >
            {children}
        </CoffeesContext.Provider>
    )
}