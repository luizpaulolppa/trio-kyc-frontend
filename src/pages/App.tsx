import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleChangeLanguage() {
    const language = i18n.language === 'en' ? 'pt' : 'en'
    localStorage.setItem("i18n", language)
    i18n.changeLanguage(language)
  }

  return (
    <div className="flex h-full">
      <div className="w-full mx-4">
        <div className="max-w-[700px] mx-auto flex flex-col justify-between h-full py-16">
          <div className="flex flex-col gap-32">
            <div className="flex justify-between">
              <img src="img/trio-logo.svg" alt="" />
            </div>
            <div>
              <h1 className="text-body-light text-[50px] font-bold leading-[60px]">
                {t('Todos os pagamentos no alcance das suas mãos.')}
              </h1>
              <p className="mb-[60px] mt-8 text-neutral-500 text-[24px] font-normal leading-7">
                {t('Seja bem-vindo(a) à Trio: líder de mercado em alto volume de transações corporativas ágeis, livres de erros e conciliadas de ponta-a-ponta.')}
              </p>

              <button
                className="bg-primary text-white px-4 py-2 rounded cursor-pointer"
                onClick={handleChangeLanguage}
              >
                Abrir Conta
              </button>
            </div>
          </div>

          <p className="text-neutral-500 font-normal">Ao registrar sua empresa, você concorda com nossa <span className="underline font-semibold cursor-pointer">política de privacidade</span> e aceita os <span className="underline font-semibold cursor-pointer">termos de uso</span>.</p>
        </div>
      </div>
      <div className="w-full bg-[url(/img/kyc-first-step.png)] bg-no-repeat bg-cover hidden lg:flex"></div>
    </div>
  )
}

export default App
