export const SVGLineHr = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={1} width={50} {...props}>
    <line x1="0" y1="0" x2="10000" y2="0" stroke="black" stroke-width="2px" strokeDasharray={"12 4"}/>
  </svg>
)

export const SVGLineVr = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1} height={50} {...props}>
    <line x1="0" y1="0" x2="0" y2="10000" stroke="black" stroke-width="2px" strokeDasharray={"12 4"}/>
  </svg>
)