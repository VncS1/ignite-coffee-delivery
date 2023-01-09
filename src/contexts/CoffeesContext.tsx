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
    handleChangeQuantity: (coffee: CartProps, newQuantity: number) => void
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

    function handleChangeQuantity(coffee: CartProps, newQuantity: number) {
        const cartItem = coffees.find(c => c.id === coffee.id)

        if (cartItem) {
            if (cartItem.quantity !== coffee.quantity) {
                cartItem.quantity = newQuantity

                const cart = coffees.filter(c => c.id !== coffee.id)
                setCoffees([...cart, cartItem])
            }
        }else {
            return
        }

    }

    

    function handleAddToCart(coffee: CartProps) {
        const cartItem = coffees.find(c => c.id === coffee.id)

        if (cartItem) {
            handleChangeQuantity(coffee, coffee.quantity)
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
                handleAddToCart,
                handleChangeQuantity
            }}
        >
            {children}
        </CoffeesContext.Provider>
    )
}