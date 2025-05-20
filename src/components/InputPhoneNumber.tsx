type Props = {
  required: boolean;
  name: string
}

type Option = {
  value: string
  label: string
  code: string
}

export function InputPhoneNumber({ required, name }: Props) {
  const options: Option[] = [
    { label: "🇧🇷 Brasil", value: "brazil", code: "" },
    { label: "🇺🇸 Estados Unidos", value: "united-states", code: "" }
  ]

  return (
    <div>
      <div className="flex justify-between items-center border border-neutral-90 rounded h-[50px]">
        <div className="flex h-full border-r border-neutral-90">
          <select name="" id="" className="mx-4 outline-none">
            {options.map((opt) => (<option value={opt.value} key={opt.value}>{opt.label}</option>))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Insira o número"
          name={name}
          className="w-full h-8 outline-none placeholder-neutral-85 ml-4"
        />
        {required && <img src="img/asterisk.svg" alt="Asterisk" className="mr-2" />}
      </div>
      <div className="text-red-400 pt-1 text-xs">* Campo obrigatório</div>
    </div>
  )
}
