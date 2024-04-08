import { css } from "@style/css"
import { Button } from "./Button"
import { SVGLineHr } from "./Line"

const ResumeURL = "https://drive.google.com/file/d/1YvL9POlbgsQApzBRbVcrd5qD5X0fzV_T/view?usp=drive_link"
const LinkedInURL = "https://www.linkedin.com/in/hannahla97/"
const MailTo = "mailto:lakimhanh97@gmail.com"

export const Header = () => {
  const openResume = () => {
    window.open(ResumeURL)
  }

  const openLinkedIn = () => {
    window.open(LinkedInURL)
  }

  const sendMailTo = () => {
    window.open(MailTo)
  }

  return (
    <div className={css({
      pos: "fixed",
      w: "full",
      bg: "white",
      zIndex: 100,
    })}>
      <div className={css({
        w: "full",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
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
          <Button type="button" label="resume" onClick={openResume} />
          <Button type="button" label="@" onClick={sendMailTo} />
          <Button type="button" label="in" textCase="normal" onClick={openLinkedIn} />
        </div>
      </div>
      <SVGLineHr className={css({ w: "full" })} />
    </div>
  )
}