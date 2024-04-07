import { css } from "@style/css"
import { Button } from "./Button"
import { SVGLineHr } from "./Line"

export const Header = () => {
  const downloadResume = () => { }

  return (
    <div className={css({
      pos: "fixed",
      w: "full",
      bg: "white",
    })}>
      <div className={css({
        w: "full",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        zIndex: 100,
        maxW: "500px",
        margin: "0 auto",
        py: "2px",
        lg: {
          maxW: "1000px",
          py: "3px"
        }
      })}>
        <div className="menu"></div>
        <div className={css({ display: "flex", flexFlow: "row", gap: "8px" })}>
          <Button type="button" label="resume" onClick={downloadResume} />
          <Button type="button" label="@" />
          <Button type="button" label="in" textCase="normal" />
        </div>
      </div>
      <SVGLineHr className={css({ w: "full" })} />
    </div>
  )
}