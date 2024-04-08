const borderURL = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='12%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`

export const DashedContainer = ({children, className}) => {
  return (
    <div style={{backgroundImage: borderURL}} className={className}>
      {children}
    </div>
  )
}