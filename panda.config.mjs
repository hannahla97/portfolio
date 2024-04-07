import { defineConfig, defineTextStyles } from "@pandacss/dev";

const textSystem = {
  title: {
    value: {
      fontSize: "2rem",
      fontWeight: "bold",
      lg: { 
        fontSize: "4rem"
      }
    }
  },
  h1: {
    value: {
      fontSize: "2rem",
      fontWeight: "bold",
      lg: { 
        fontSize: "3rem"
      }
    }
  },
  h2: {
    value: {
      fontSize: "2xl",
      fontWeight: "bold",
      lg: { 
        fontSize: "2rem"
      }
    }
  },
  h3: {
    value: {
      fontSize: "lg", //18
      fontWeight: "bold",
      lg: { 
        fontSize: "2xl" //24
      }
    }
  },
  h4: {
    value: {
      fontSize: "md", //16
      fontWeight: "bold",
      lg: { 
        fontSize: "lg" //18
      }
    }
  },
  h5: {
    value: {
      fontSize: "sm",
      fontWeight: "medium",
      lg: { 
        fontSize: "md"
      }
    }
  },
  body: {
    value: {
      fontSize: "xs",
      fontWeight: "normal",
      lg: { 
        fontSize: "sm"
      }
    }
  },
}

const textStyles = defineTextStyles(textSystem)

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx}"],

  // Files to exclude
  exclude: [],

  // Global css
  globalCss: {
    h1: {...textSystem.h1.value},
    h2: {...textSystem.h2.value},
    h3: {...textSystem.h3.value},
    h4: {...textSystem.h4.value},
    h5: {...textSystem.h5.value},
    p: {...textSystem.body.value},
  },

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  importMap: '@style'
});
