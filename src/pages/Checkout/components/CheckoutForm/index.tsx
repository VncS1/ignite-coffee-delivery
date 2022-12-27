import { FormContainer, MainContainer, PaymentMethods, MapPinIcon, DollarIcon, CreditCardIcon, BankIcon, MoneyIcon, PaymentMethod } from "./style";

export function CheckoutForm() {
    return (
        <MainContainer>

            <FormContainer action="#">
                <div className="title-text">
                    <MapPinIcon size={24} />
                    <div className="texts">
                        <span className="title">Endereço de Entrega</span>
                        <span className="subtitle">Informe o endereço onde deseja receber seu pedido.</span>
                    </div>
                </div>

                <div className="input-container">
                    <input type="text" placeholder="CEP" className="cep" />
                    <input type="text" placeholder="Rua" className="rua" />
                    <input type="text" placeholder="Número" className="num" />
                    <input type="text" placeholder="Complemento*" className="complemento" />
                    <input type="text" placeholder="Bairro" className="bairro" />
                    <input type="text" placeholder="Cidade" className="cidade" />
                    <input type="text" placeholder="UF" className="uf" />
                </div>

            </FormContainer>

            <PaymentMethods>
                <div className="title-text">
                    <DollarIcon size={24} />
                    <div className="texts">
                        <span className="title">Pagamento</span>
                        <span className="subtitle">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </div>

                <div className="methods">
                    <PaymentMethod>
                        <CreditCardIcon size={16} />
                        <span>CARTÃO DE CRÉDITO</span>
                    </PaymentMethod>
                    <PaymentMethod>
                        <BankIcon size={16} />
                        <span>CARTÃO DE DÉBITO</span>
                    </PaymentMethod>
                    <PaymentMethod>
                        <MoneyIcon size={16} />
                        <span>DINHEIRO</span>
                    </PaymentMethod>
                </div>
            </PaymentMethods>
        </MainContainer>
    )
}