type Props = {
  required: boolean;
}

export function InputPhoneNumber({ required }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center border border-neutral-90 rounded h-[50px]">
        <div className="flex h-full border-r border-neutral-90">
          <select name="" id="" className="mx-4 outline-none">
            <option value="brazil">🇧🇷 Brasil</option>
            <option value="united-states">🇺🇸 Estados Unidos</option>
          </select>
        </div>
        <input type="text" placeholder="Insira o número" className="w-full h-8 outline-none placeholder-neutral-85 ml-4" />
        {required && <img src="img/asterisk.svg" alt="Asterisk" className="mr-2" />}
      </div>
      <div className="text-red-400 pt-1 text-xs">* Campo obrigatório</div>
    </div>
  )
}
