import { tv } from 'tailwind-variants';

type Props = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  color?: "primary" | "secondary"
  type?: "button" | "submit" | "reset"
}

const button = tv({
  base: "px-4 py-2 rounded cursor-pointer font-semibold",
  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary: "bg-neutral-80 text-primary"
    }
  }
})

export function Button({ children, disabled, onClick, color = "primary", type = "button" }: Props) {
  return (
    <button
      className={button({ color })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
