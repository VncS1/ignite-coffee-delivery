import { createContext, ReactNode, useEffect, useState } from "react"

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
    handleAddToCart: (coffee: CartProps) => void
}

export const CoffeesContext = createContext<CoffeesContextData>({} as CoffeesContextData)

interface CoffeesContextProviderProps {
    children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [coffees, setCoffees] = useState<CartProps[]>([])

    //salvando os ciclos no local storage
    useEffect(() => {
        const stateJSON = JSON.stringify(coffees)

        localStorage.setItem('@ignite-coffee-delivery:coffees-state-1.0.0', stateJSON)
    }, [coffees])

    function handleAddToCart(coffee: CartProps) {
        const cartItem = coffees.find(c => c.id === coffee.id)

        if (cartItem) {
            cartItem.quantity = coffee.quantity

            const cart = coffees.filter(c => c.id !== coffee.id)
            setCoffees([...cart, cartItem])

        } else {
            setCoffees([...coffees, {
                id: coffee.id,
                image: coffee.image,
                type: coffee.type,
                name: coffee.name,
                description: coffee.description,
                quantity: coffee.quantity
            }])
        }
    }

    console.log(coffees)
    return (
        <CoffeesContext.Provider
            value={{
                coffees,
                setCoffees,
                handleAddToCart
            }}
        >
            {children}
        </CoffeesContext.Provider>
    )
}