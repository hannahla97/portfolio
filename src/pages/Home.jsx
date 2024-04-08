import { css } from "@style/css"

const CONTENT = {
  greetings: `I'm Hanh La.`,
  description: `I help building and designing web and mobile apps.`,
  skills: [
    "web application dev",
    "react native dev",
    "ui designer"
  ]
}
export const Home = () => {
  return (
    <div className={css({
      width: "full",
      px: "16px",
      h: "screen",
      pos: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflowX: "hidden",
      lg: {
        px: "12px",
        h: "680px",
        maxW: "1000px",
        mt: "72px"
      }
    })}>
      <img className={css({
        pos: "absolute",
        top: 0,
        zIndex: 0,
        left: 0,
        w: "full",
        h: "full",
        filter: "grayscale(100%)",
        objectFit: "cover",
        opacity: "0.6"
      })}
        src={`./src/assets/home.jpg`}
        ></img>
      <div
        className={css({ pos: "absolute", top: 0, zIndex: 0, left: 0, w: "full", h: "full" })}
        style={{ backgroundImage: "linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(0,0,0,0) 100%)" }}>
      </div>
      <div className={css({
        width: "full",
        display: "flex",
        flexFlow: "column",
        gap: "8px",
        maxW: "500px",
        zIndex: 10,
        lg: {
          gap: "12px",
          maxW: "1000px",
        }
      })}>
        <p>{`{`}</p>
        <div className={css({
          display: "flex",
          flexFlow: "column",
          gap: "8px",
          pl: "8px",
          lg: { gap: "12px", pl: "12px" }
        })}>
          <p>{`"greetings":`}</p>
          <div className={css({ textStyle: "title", pl: "16px", lg: { pl: "24px" } })}>{`"${CONTENT.greetings}",`}</div>
          <p>{`"description":`}</p>
          <h5 className={css({ pl: "16px", lg: { pl: "24px" } })}>{`"${CONTENT.description}",`}</h5>
          <p>{`"skills": [`}</p>
          <div>
            {
              CONTENT.skills.map((skill, index) => (
                <h5 key={`home-skill-${index}`} className={css({ pl: "16px", lg: { pl: "24px" } })}>{`"${skill}",`}</h5>
              ))
            }
          </div>
          <p>{`]`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}