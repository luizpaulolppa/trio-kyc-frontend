type Props = {
  value: string,
  name?: string
  required?: boolean;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: (value: string) => void
  hasError?: boolean
  errorMessage?: string
}

export function Input({
  name,
  value,
  placeholder,
  onChange,
  errorMessage,
  type = "text",
  hasError = false,
  required = false
}: Props) {
  return (
    <div>
      <div className="flex justify-between border border-neutral-90 p-2 rounded">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full h-8 outline-none placeholder-neutral-85"
          value={value}
          onChange={(event) => onChange && onChange(event.target.value)}
        />
        {required && <img src="img/asterisk.svg" alt="Asterisk" className="mr-2" />}
      </div>
      {hasError && <div className="text-red-400 pt-1 text-xs">{errorMessage}</div>}
    </div>
  )
}
