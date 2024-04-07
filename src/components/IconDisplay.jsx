import { css } from "@style/css"

export const IconDisplay = ({ Icon, decorator = true }) => {
  return (
    <div className={css({ display: "flex", flexFlow: "row", gap: "4px", alignItems: "center", lg: { gap: "6px" } })}>
      {decorator &&
        <>
          <h2 className={css({ display: "inline-block", lg: { display: "none" } })}>{`>`}</h2>
          <h2 className={css({ display: "none", lg: { display: "inline-block" } })}>{`[`}</h2>
        </>
      }
      <Icon className={css({
        w: "36px",
        h: "36px",
        padding: "2px",
        bg: "gray.200",
        lg: {
          w: "40px",
          h: "40px",
          padding: "3px",
        }
      })} />
      {decorator && <h2 className={css({ display: "none", lg: { display: "inline-block" } })}>{`]`}</h2>}
    </div>
  )
}