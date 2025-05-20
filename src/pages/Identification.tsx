import { useTranslation } from "react-i18next";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { Input } from "../components/Input";
import { InputPhoneNumber } from "../components/InputPhoneNumber";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type InitialFormData = {
  name: string,
  email: string,
  phone: string
}

export default function Identification() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const initialFormData: InitialFormData = {
    name: "Luiz Paulo",
    email: "luiz.pilegi@trio.com.br",
    phone: "+5541999381724"
  }

  const [data, formAction] = useActionState(submitForm, initialFormData)
  const { pending } = useFormStatus()

  function submitForm(prevState: InitialFormData, formData: FormData): InitialFormData {
    const name = formData.get("fullname")
    return { email: "", name: "", phone: "" }
  }

  function handleNextStep() {

  }

  function handleBackStep() {
    navigate("/")
  }

  return (
    <div className="flex h-full">
      <div className="w-full mx-4">
        <div className="max-w-[700px] mx-auto flex flex-col justify-between h-full py-16">
          <div className="flex flex-col gap-32">
            <div className="flex justify-between">
              <img src="img/trio-logo.svg" alt="" />
            </div>
            <form action={formAction}>
              <h1 className="text-body-light text-[50px] font-bold leading-[60px]">
                {t('Olá! Vamos começar?')}
              </h1>
              <p className="mt-8 text-neutral-90 text-[24px] font-normal leading-7">
                {t('Para abrir sua conta, será necessário o preenchimento de dados da empresa, dos sócios, representantes legais, além de informações sobre o negócio e o envio de alguns documentos.')}
              </p>

              <div className="flex flex-col gap-4 mt-16 mb-12">
                <Input type="text" value={data.name} placeholder="Insira seu nome" name="fullname" required />
                <Input type="text" value={data.email} placeholder="Insira seu e-mail corporativo" name="email" required />
                <InputPhoneNumber required name="phone" />
              </div>

              <div className="flex justify-between">
                <Button onClick={handleBackStep} color="secondary">Voltar</Button>
                <Button onClick={handleNextStep} type="submit" disabled={pending}>Continuar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-[url(/img/kyc-second-step.svg)] bg-no-repeat bg-center bg-green-step hidden lg:flex"></div>
    </div>
  )
}
