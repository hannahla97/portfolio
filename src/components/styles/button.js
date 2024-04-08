import { cva } from "@style/css"

export const buttonStyle = cva({
  base: {
    display: "flex",
    flexFlow: "row",
    textStyle: "md",
    cursor: "pointer",
    lg: {
      textStyle: "2xl"
    }
  },
  variants: {
    type: {
      link: {
        gap: "4px",
        lg: {
          gap: "6px",
        }
      },
      button: {
        gap: "2px",
        lg: {
          gap: "3px",
        }
      },
    },
    active: {
      true: {
        fontWeight: "bold",
      },
      false: {
        fontWeight: "medium",
      }
    },
    textCase: {
      normal: {
        textTransform: "none"
      },
      upper: {
        textTransform: "uppercase",
      }
    }
  }
})