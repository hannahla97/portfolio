import { css } from "@style/css"

export const Layout = ({ title, children }) => {
  return (
    <div className={css({
      width: "full",
      maxW: "500px",
      px: "16px",
      lg: {
        px: 0,
        maxW: "1000px"
      }
    })}>
      <h1 className={css({ textTransform: "lowercase" })}>{title}_</h1>
      <div className={css({
        mt: "32px", 
        lg: {
          mt: "48px"
        }
      })}>
        {children}
      </div>
    </div>
  )
}