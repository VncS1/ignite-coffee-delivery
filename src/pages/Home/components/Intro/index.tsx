import { IntroContainer, ItemsContainer, TitleContainer } from "./style";

import homeImage from '../../../../assets/homeImage.png'

import { ItemDetail } from "../ItemDetails";

import cartIcon from '../../../../assets/ItemIcon/Icon.svg'
import clockIcon from '../../../../assets/ItemIcon/Icon-1.svg'
import boxIcon from '../../../../assets/ItemIcon/Icon-2.svg'
import coffeeIcon from '../../../../assets/ItemIcon/Icon-3.svg'


export function Intro() {
    return (
        <IntroContainer>
            <div className="left-items">
                <TitleContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </TitleContainer>
                <ItemsContainer>
                    <ItemDetail
                    
                        itemImage={cartIcon}
                        itemText="Compra simples e segura"
                    />
                    <ItemDetail
                        itemImage={clockIcon}
                        itemText="Entrega rápida e rastreada"
                    />
                    <ItemDetail
                        itemImage={boxIcon}
                        itemText="Embalagem mantém o café intacto"
                    />
                    <ItemDetail
                        itemImage={coffeeIcon}
                        itemText="O café chega fresquinho até você"
                    />
                </ItemsContainer>
            </div>


            <img src={homeImage} className="homeImage" />

            {/* 
            <img src={backgroundImage} className="background" /> */}
        </IntroContainer>
    )
}