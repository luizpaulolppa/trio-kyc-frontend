type Props = {
  required: boolean;
  placeholder?: string;
  type: "text" | "password" | "date";
}

export function Input({ required, placeholder }: Props) {
  return (
    <div>
      <div className="flex justify-between border border-neutral-90 p-2 rounded">
        <input type="text" placeholder={placeholder} className="w-full h-8 outline-none placeholder-neutral-85" />
        {required && <img src="img/asterisk.svg" alt="Asterisk" className="mr-2" />}
      </div>
      <div className="text-red-400 pt-1 text-xs">* Campo obrigatório</div>
    </div>
  )
}
