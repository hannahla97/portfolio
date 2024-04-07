import { css } from "@style/css"
import { Layout } from "./Layout"
import { Fragment } from "react"
import { Decorator } from "@src/components/Decorator"
import { IconDisplay } from "@src/components/IconDisplay"
import { DesignIcon, PhoneIcon, WebIcon } from "@src/components/icon"

const SKILLS = [
  {
    title: "web",
    Icon: WebIcon,
    description: "in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at."
  },
  {
    title: "mobile",
    Icon: PhoneIcon,
    description: "in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at."
  },
  {
    title: "design",
    Icon: DesignIcon,
    description: "in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at."
  }
]

const SkillTile = ({ title, Icon, description }) => {
  return (
    <div className={css({
      width: "full",
      px: "16px",
      lg: {
        px: "0",
        py: "24px"
      }
    })}>
      <div className={css({
        display: "flex",
        flexFlow: "row",
        gap: "8px",
        lg: {
          gap: "12px"
        }
      })}>
        <IconDisplay Icon={Icon}/>
        <h2 className={css({ textTransform: "uppercase" })}>{title}</h2>
      </div>
      <p className={css({ mt: "12px" })}>{description}</p>
    </div>
  )
}

export const Skills = () => {
  return (
    <Layout title={"skills"}>
      {/* mobile */}
      <div className={css({
        display: "flex",
        flexFlow: "column",
        gap: "4px",
        lg: {
          flexFlow: "row",
          gap: "12px"
        }
      })}>
        {SKILLS.map((skill, index) => {
          return (
            <Fragment key={`skill_${skill.title}_${index}`}>
              <SkillTile {...skill} />
              <div className={css({
                mt: "4px",
                w: "full",
                _last: {
                  display: "none"
                },
                lg: {
                  mt: 0,
                  ml: "12px",
                  w: "fit-content"
                }
              })}>
                {/* divider */}
                <div className={css({display: "block", w: "full", lg: { display: "none" }})}>
                  <Decorator/>
                </div>
                <div className={css({display: "none", h: "full", lg: { display: "block" }})}>
                  <Decorator direction={"vertical"}/>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </Layout>
  )
}