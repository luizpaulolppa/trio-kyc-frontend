import { useTranslation } from "react-i18next";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export default function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  function handleChangeLanguage() {
    const language = i18n.language === 'en' ? 'pt' : 'en'
    localStorage.setItem("i18n", language)
    i18n.changeLanguage(language)
  }

  function handleNextStep() {
    navigate("/identification");
  }

  return (
    <div className="flex h-full">
      <div className="w-full mx-4">
        <div className="max-w-[700px] mx-auto flex flex-col justify-between h-full py-16">
          <div className="flex flex-col gap-32">
            <div className="flex justify-between">
              <img src="img/trio-logo.svg" alt="" />
              <div
                onClick={handleChangeLanguage}
                className="flex items-center justify-center gap-2 h-12 border border-primary px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                {i18n.language === 'pt' && <img src="img/united-states.png" alt="United States Flag" className="w-6" />}
                {i18n.language === 'en' && <img src="img/brazil.png" alt="Brazil Flag" className="w-6" />}
                {i18n.language === 'pt' && <p className="font-semibold">EN</p>}
                {i18n.language === 'en' && <p className="font-semibold">PT-BR</p>}
              </div>
            </div>
            <div>
              <h1 className="text-body-light text-[50px] font-bold leading-[60px]">
                {t('Todos os pagamentos no alcance das suas mãos.')}
              </h1>
              <p className="mb-[60px] mt-8 text-neutral-90 text-[24px] font-normal leading-7">
                {t('Seja bem-vindo(a) à Trio: líder de mercado em alto volume de transações corporativas ágeis, livres de erros e conciliadas de ponta-a-ponta.')}
              </p>

              <Button onClick={handleNextStep}>Abrir Conta</Button>
            </div>
          </div>
          <p className="text-neutral-90 font-normal">Ao registrar sua empresa, você concorda com nossa <span className="underline font-semibold cursor-pointer">política de privacidade</span> e aceita os <span className="underline font-semibold cursor-pointer">termos de uso</span>.</p>
        </div>
      </div>
      <div className="w-full bg-[url(/img/kyc-first-step.png)] bg-no-repeat bg-cover hidden lg:flex"></div>
    </div>
  )
}
