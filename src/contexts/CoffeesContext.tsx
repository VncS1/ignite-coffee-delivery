import { createContext, ReactNode, useEffect, useState } from "react"

interface CartProps {
    id: number
    image: string
    type: string[]
    name: string
    description: string
    price: number
    quantity: number
}

interface CoffeesContextData {
    coffees: CartProps[]
    setCoffees: (coffees: CartProps[]) => void
    handleAddToCart: (coffee: CartProps) => void
    handleChangeQuantityHome: (id: number, newQuantity: number) => void
    handleUpdateQuantityCart: (id: number, newQuantity: number) => void
    handleRemoveFromCart: (id: number) => void
    handleClearCart: () => void
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


    function handleChangeQuantityHome(id: number, newQuantity: number) {
        const cartItem = coffees.find(c => c.id === id)

        if (cartItem) {
            cartItem.quantity += newQuantity

            const cart = coffees.filter(c => c.id !== id)
            setCoffees([...cart, cartItem])

        } else {
            return
        }

    }

    function handleUpdateQuantityCart(id: number, newQuantity: number) {
        const cartItem = coffees.find(c => c.id === id)

        if (cartItem) {
            cartItem.quantity = newQuantity

            const cart = coffees.filter(c => c.id !== id)
            setCoffees([...cart, cartItem])

        } else {
            return
        }

    }



    function handleAddToCart(coffee: CartProps) {
        const cartItem = coffees.find(c => c.id === coffee.id)

        if (cartItem) {
            handleChangeQuantityHome(coffee.id, coffee.quantity)
        } else {
            setCoffees([...coffees, {
                id: coffee.id,
                image: coffee.image,
                type: coffee.type,
                name: coffee.name,
                description: coffee.description,
                price: coffee.price,
                quantity: coffee.quantity
            }])
        }
    }

    function handleRemoveFromCart(id: number) {
        const cart = coffees.filter(c => c.id !== id)

        setCoffees(cart)
    }

    function handleClearCart(){
        setCoffees([])
    }

    console.log(coffees)
    return (
        <CoffeesContext.Provider
            value={{
                coffees,
                setCoffees,
                handleAddToCart,
                handleChangeQuantityHome,
                handleUpdateQuantityCart,
                handleRemoveFromCart,
                handleClearCart
            }}
        >
            {children}
        </CoffeesContext.Provider>
    )
}