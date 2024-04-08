import { css } from "@style/css"
import { Layout } from "./Layout"
import { Fragment } from "react"
import { Decorator } from "@src/components/Decorator"
import { IconDisplay } from "@src/components/IconDisplay"
import { DominosIcon, EFIcon, SLCIcon } from "@src/components/icon"
import { SVGLineVr } from "@src/components/Line"
import { UQIcon } from "@src/components/icon/UQIcon"

const EXP = [
  {
    company: "EnergyFlex",
    title: "Full-stack Developer",
    from: new Date(2023, 7),
    to: undefined,
    Icon: EFIcon,
    description: "Building web & mobile application for this innovative start-up that provides solution for making everyone renewable ready.",
    stack: ["Next.js", "React Native", "Zustand", "GraphQL (Apollo)", "Prisma"]
  },
  {
    company: "Domino's Pizza",
    title: "Software Engineer",
    from: new Date(2021, 5),
    to: new Date(2023, 7),
    Icon: DominosIcon,
    description: "Worked with team(s) to build next-gen online ordering web & mobile platform.",
    stack: ["React.js", "React Native", "Redux", "GraphQL (Apollo)"]
  },
  {
    company: "The University of Queensland",
    title: "Web Application Developer",
    from: new Date(2020, 0),
    to: new Date(2021, 5),
    Icon: UQIcon,
    description: "Built and refactored a range of MVP web applications and tools for education purpose.",
    stack: ["React.js", "Vue", "Mobx", "Node", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    company: "Student Life Care",
    title: "UI/UX Designer",
    from: new Date(2018, 6),
    to: new Date(2019, 5),
    Icon: SLCIcon,
    description: "Developed solutions for customer journey, user experience flow, navigation system for new student utilities mobile app.",
    stack: ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "InVision"]
  },
]

const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const ExperienceTile = ({ company, title, from, to, Icon, description, stack }) => {
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
        <div>
          <p className={css({ display: "none", lg: { display: "block" } })}>
            {description}
          </p>
          <p className={css({ mb: "4px", lg: { mb: "6px" } })}>Tech stack: {stack.join(" - ")}</p>
        </div>
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