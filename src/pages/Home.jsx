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
      bg: "amber.400",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      lg: {
        px: "12px",
        h: "680px",
        maxW: "1000px",
        mt: "72px"
      }
    })}>
      <div className={css({
        width: "full",
        display: "flex",
        flexFlow: "column",
        gap: "8px",
        maxW: "500px",
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