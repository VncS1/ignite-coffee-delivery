import { IconProps } from "phosphor-react";
import { createElement, ReactElement, ReactNode } from "react";
import { ItemContainer } from "./style";

interface ItemProps {
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    text: string,
    bgColor?: string
}

export function ItemDetail({icon, text, bgColor}: ItemProps){
    return (
        <ItemContainer color={bgColor}>
            <div>
                {createElement(icon, {size: 16, weight: "fill", color: '#fff'})}
            </div>
            <span>{text}</span>
        </ItemContainer>
    )
}