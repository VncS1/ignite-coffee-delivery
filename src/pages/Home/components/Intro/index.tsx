import { Container, Content, ItemsContainer, TitleContainer } from "./style";

import homeImage from '../../../../assets/homeImage.png'

import { ItemDetail } from "../ItemDetails";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

// Procurar sobre os tipos de 'div' {article, section, div}, quando usar qual

export function Intro() {

    const theme = useTheme();

    return (
        <Container>
            <Content>
                {/*Responsivo: Imagem, titulo e icones */}

                <div className="left-items">
                    <TitleContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    </TitleContainer>
                    <ItemsContainer>
                        <ItemDetail
                            icon={ShoppingCart}
                            text="Compra simples e segura"
                            bgColor={theme["yellow-dark"]}
                        />
                        <ItemDetail
                            icon={Package}
                            text="Embalagem mantém o café intacto"
                            bgColor={theme["base-title"]}
                        />
                        <ItemDetail
                            icon={Timer}
                            text="Entrega rápida e rastreada"
                            bgColor={theme["yellow"]}

                        />

                        <ItemDetail
                            icon={Coffee}
                            text="O café chega fresquinho até você"
                            bgColor={theme["purple"]}
                        />
                    </ItemsContainer>
                </div>


                <img src={homeImage} className="homeImage" />
            </Content>
        </Container>
    )
}