import { useMemo, useState } from "react";
import { Layout } from "./Layout"
import { DashedContainer } from "@src/components/DashedContainer";
import { css } from "@style/css";
import { SVGLineHr } from "@src/components/Line";
import { IconDisplay } from "@src/components/IconDisplay";
import { WebIcon } from "@src/components/icon";

//loop + auto loop
const PROJECTS = [
  {
    title: "Project 1",
    type: "web application",
    description: "in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at.",
    img: "",
    link: "",
  },
  {
    title: "Project 2",
    type: "web application",
    description: "in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at.",
    img: "",
    link: "",
  }
]

const ProjectTile = ({ title, type, description, img, fullDisplay = false, link }) => {
  return (
    <a href={link} className={css({ flexBasis: "1/2", w: "full" })}>
      <DashedContainer className={css({
        w: "full",
        display: "none",
        flexFlow: "column",
        gap: "6px",
        padding: "12px",
        lg: { display: "flex" }
      })}>
        <h3>{title}</h3>
        <h5>{type}</h5>
        <SVGLineHr className={css({ w: "full" })} />
        <div className={css({ w: "full", h: "150px", bg: "gray.200" })}>
        </div>
        {fullDisplay && <p>{description}</p>}
      </DashedContainer>

      {/* mobile */}
      <DashedContainer className={css({
        w: "full",
        display: "flex",
        flexFlow: "column",
        gap: "4px",
        padding: "8px",
        lg: { display: "none" }
      })}>
        {fullDisplay && (
          <div className={css({ w: "full", h: "150px", bg: "gray.200" })}>
          </div>
        )}
        <h3>{title}</h3>
        <h5>{type}</h5>
        <SVGLineHr className={css({ w: "full" })} />
        {fullDisplay && <p>{description}</p>}
      </DashedContainer>
    </a>
  )
}

export const Projects = () => {
  const [curIdx, setCurIdx] = useState(0)

  const getPrev = () => curIdx == 0 ? PROJECTS.length - 1 : curIdx - 1
  const getNext = () => curIdx == PROJECTS.length - 1 ? 0 : curIdx + 1

  const displayItems = useMemo(() => {
    if (!PROJECTS?.length) return [];
    const prv = getPrev()
    const nxt = getNext()
    return [PROJECTS[prv], PROJECTS[curIdx], PROJECTS[nxt]]
  }, [curIdx, PROJECTS])

  const displayItemsMobile = useMemo(() => {
    if (!PROJECTS?.length) return [];
    const nxt = getNext()
    const nxt2 = nxt == PROJECTS.length - 1 ? 0 : nxt + 1
    return [PROJECTS[curIdx], PROJECTS[nxt], PROJECTS[nxt2]]
  }, [curIdx, PROJECTS])

  const next = () => {
    setCurIdx(getNext())
  }

  const prev = () => {
    setCurIdx(getPrev())
  }

  const ProjectView = () => {
    return (
      <div className={css({
        display: "none",
        lg: {
          display: "flex",
          flexFlow: "column",
          gap: "24px"
        }
      })}>
        <div className={css({
          display: "flex",
          flexFlow: "row",
          w: "full",
          justifyContent: "space-between"
        })}>
          <span className={css({ fontWeight: "bold", fontSize: "2rem", w: "40px", h: "40px", cursor: "pointer" })} onClick={prev}>{`<`}</span>
          {PROJECTS.map((project, index) => (
            <button className={css({ cursor: "pointer" })} key={`icon_${project.type}_${index}`} type="button" onClick={() => setCurIdx(index)}>
              <IconDisplay Icon={WebIcon} isActive={curIdx == index} />
            </button>
          ))}
          <span className={css({ fontWeight: "bold", fontSize: "2rem", w: "40px", h: "40px", cursor: "pointer" })} onClick={next}>{`>`}</span>
        </div>

        <div className={css({
          display: "flex",
          flexFlow: "row",
          w: "full",
          gap: "12px",
        })}>
          {
            displayItems.map((project, index) => (
              <ProjectTile key={`project_tile_${index}`} {...project} fullDisplay={index == 1} />
            ))
          }
        </div>
      </div>
    )
  }

  const ProjectViewMobile = () => {
    return (
      <div className={css({
        display: "flex",
        flexFlow: "row",
        gap: "12px",
        lg: {
          display: "none",
        }
      })}>
        <div className={css({
          display: "flex",
          flexFlow: "column",
          w: "fit",
          gap: "16px"
        })}>
          {PROJECTS.map((project, index) => (
            <button key={`icon_${project.type}_${index}`} className={css({ cursor: "pointer" })} type="button" onClick={() => setCurIdx(index)}>
              <IconDisplay Icon={WebIcon} isActive={curIdx == index} />
            </button>
          ))}
        </div>

        <div className={css({
          display: "flex",
          flexFlow: "column",
          w: "full",
          gap: "8px",
        })}>
          {
            displayItemsMobile.map((project, index) => (
              <ProjectTile key={`project_tile_mobile_${index}`} {...project} fullDisplay={index == 0} />
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <Layout title={"projects"}>
      <ProjectView />
      {/* mobile */}
      <ProjectViewMobile />
    </Layout>
  )
}