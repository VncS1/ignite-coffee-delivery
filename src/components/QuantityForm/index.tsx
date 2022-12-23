import { MinusIcon, PlusIcon, QuantityFormContainer } from "./style";

export function QuantityForm() {
    return (
        <QuantityFormContainer>
            <button type="button" className="button-quantity">
                <MinusIcon size={20} weight="fill" />
            </button>
            <input type="number" className="quantity" min="1" defaultValue="0" />
            <button type="button" className="button-quantity">
                <PlusIcon size={20} weight="fill" />
            </button>
        </QuantityFormContainer>
    );
}