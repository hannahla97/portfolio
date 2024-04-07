import { css } from "@style/css"
import { Layout } from "./Layout"
import { Fragment } from "react"
import { Decorator } from "@src/components/Decorator"
import { IconDisplay } from "@src/components/IconDisplay"
import { DesignIcon, PhoneIcon, WebIcon } from "@src/components/icon"
import { SVGLineVr } from "@src/components/Line"

const EXP = [
  {
    company: "Company",
    title: "Software Engineer",
    from: new Date(2021, 5),
    to: new Date(2023, 7),
    Icon: WebIcon,
    description: "in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at."
  },
  {
    company: "Company",
    title: "Software Engineer",
    from: new Date(2021, 5),
    to: new Date(2023, 7),
    Icon: WebIcon,
    description: "in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at."
  },
]

const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const ExperienceTile = ({ company, title, from, to, Icon, description }) => {
  const [fromMonth, fromYear] = [from.getMonth(), from.getFullYear()]
  const [toMonth, toYear] = [to?.getMonth(), to?.getFullYear()]

  const fromDate = `${fromMonth !== undefined ? MONTH[fromMonth] : ""} ${fromYear}`
  const toDate = toYear ? `${toMonth !== undefined ? MONTH[toMonth] : ""} ${toYear}` : ""

  return (
    <div className={css({ display: "flex", flexFlow: "row", gap: "16px", lg: { gap: "12px" } })}>
      <div className={css({ display: "flex", flexFlow: "column", alignItems: "center", gap: "8px" })}>
        <div className={css({ display: "none", lg: { display: "block" } })}>
          <IconDisplay Icon={Icon} />
        </div>
        <div className={css({ display: "block", lg: { display: "none" } })}>
          <IconDisplay Icon={Icon} decorator={false} />
        </div>
        <SVGLineVr className={css({ height: "full" })} />
      </div>
      <div className={css({ display: "flex", flexFlow: "column", gap: "4px", lg: { gap: "6px" } })}>
        <h3>{company}</h3>
        <h4>{title}</h4>
        <h5>{`${fromDate} - ${toDate}`}</h5>
        <p className={css({ display: "none", mb: "4px", lg: { display: "block", mb: "6px" } })}>{description}</p>
      </div>
    </div>
  )
}

export const Experience = () => {
  return (
    <Layout title={"experience"}>
      {/* mobile */}
      <div className={css({
        display: "flex",
        flexFlow: "column",
        gap: "8px",
        lg: {
          gap: "12px"
        }
      })}>
        {EXP.map((exp, index) => {
          return (
            <Fragment key={`skill_${exp.company}_${index}`}>
              <ExperienceTile {...exp} />
            </Fragment>
          )
        })}
      </div>


    </Layout>
  )
}