import { useState } from "react";
import { MinusIcon, PlusIcon, QuantityFormContainer } from "./style";

export function QuantityForm() {

    const [quantity, setQuantity] = useState(0);

    function handleIncrement(value: number) {
        if(value == -1 && quantity > 0){
            setQuantity(quantity + value);
        }else if(value == 1){
            setQuantity(quantity + value);
        }

    }

    return (
        <QuantityFormContainer>
            <button type="button" onClick={() => handleIncrement(-1)} className="button-quantity">
                <MinusIcon size={20} weight="fill" />
            </button>
            <input type="number" disabled className="quantity" min="1" defaultValue="0" value={quantity} />
            <button type="button" className="button-quantity">
                <PlusIcon size={20} onClick={() => handleIncrement(1)} weight="fill" />
            </button>
        </QuantityFormContainer>
    );
}