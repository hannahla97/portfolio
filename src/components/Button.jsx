import { buttonStyle } from "./styles/button"


export const Button = (props) => {
  const { type, label, active, textCase, ...buttonProps } = props
  if (type == "button") {
    return <button {...buttonProps} type="button" className={buttonStyle({ 
      variant: "button", 
      active: "true", 
      textCase: textCase == "normal" ? "normal" : "upper" 
    })}>
      <span>{`[`}</span>
      <span>{label}</span>
      <span>{`]`}</span>
    </button>
  }

  return (
    <button {...buttonProps} type="button" className={buttonStyle({ 
      variant: "link", 
      active: active ? "true" : "false",
      textCase: textCase == "normal" ? "normal" : "upper"
    })}>
      <span>{`>>`}</span>
      {label}
    </button>
  )
}