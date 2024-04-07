import { css } from "@style/css"
import { PlusIcon } from "./icon"
import { SVGLineHr, SVGLineVr } from "./Line"

export const Decorator = ({ direction }) => {
  if (direction == "vertical") {
    return (
      <div className={css({
        display: "flex",
        flexFlow: "column",
        w: "fit-content",
        h: "full",
        alignItems: "center",
        gap: "4px",
        lg: {
          gap: "6px"
        }
      })}>
        <PlusIcon width={20} height={20} className={css({minH: "20px"})}/>
        <SVGLineVr className={css({minH: "100px", height: "full"})}/>
        <PlusIcon width={20} height={20} className={css({minH: "20px"})}/>
      </div>
    )
  }

  return (
    <div className={css({
      display: "flex",
      flexFlow: "row",
      h: "fit-content",
      w: "full",
      alignItems: "center",
      gap: "4px",
      lg: {
        gap: "6px"
      }
    })}>
      <PlusIcon width={20} height={20} className={css({minW: "20px"})}/>
      <SVGLineHr className={css({minW: "100px", w: "full"})}/>
      <PlusIcon width={20} height={20} className={css({minW: "20px"})}/>
    </div>
  )
}