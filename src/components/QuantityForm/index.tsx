import { useState } from "react";
import { MinusIcon, PlusIcon, QuantityFormContainer } from "./style";

interface QuantityFormProps {
    quantity: number;
    setQuantity: (quantity: number) => void;
}


export function QuantityForm({quantity, setQuantity}: QuantityFormProps) {

    

    function handleIncrement(value: number) {
        if(value+quantity < 0) {
            return
        }

        setQuantity(quantity + value);
    }

    return (
        <QuantityFormContainer>
            <button type="button" onClick={() => handleIncrement(-1)} className="button-quantity">
                <MinusIcon size={20} weight="fill" />
            </button>
            <input type="text" disabled className="quantity" min="1" value={quantity} />
            <button type="button" className="button-quantity">
                <PlusIcon size={20} onClick={() => handleIncrement(1)} weight="fill" />
            </button>
        </QuantityFormContainer>
    );
}