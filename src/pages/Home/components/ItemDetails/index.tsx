import { ItemContainer } from "./style";

interface ItemProps {
    itemImage: string;
    itemText: string
}

export function ItemDetail({itemImage, itemText}: ItemProps){
    return (
        <ItemContainer>
            <img src={itemImage} />
            <span>{itemText}</span>
        </ItemContainer>
    )
}