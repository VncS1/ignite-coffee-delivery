import { CheckoutCart } from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./style";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const addressFormValidationSchema = zod.object({
  cep: zod.string().length(8),
  rua: zod.string().min(7),
  num: zod.string().min(1),
  complemento: zod.string(),
  cidade: zod.string().min(4),
  bairro: zod.string().min(4),
  uf: zod.string().length(2),
})

export type addressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {

  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      num: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    }
  })

  return (
    <CheckoutContainer>
      <FormProvider {...addressForm}>
        <div className="checkout-form">
          <span className="checkout-title">Complete seu pedido</span>
          <CheckoutForm />
        </div>
        <div className="checkout-cart">
          <span className="checkout-title" >Cafés selecionados</span>

          <CheckoutCart />
        </div>
      </FormProvider>
    </CheckoutContainer>
  )
}