import { ReactNode } from 'react'
import { Card, Grid } from 'antd'

export const CardAuth:React.FC<{children:ReactNode}> = ({children}) => {

    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()
    const styleDestop:React.CSSProperties = { width: 539, borderRadius: 2 , paddingBlock:64, paddingInline:32, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}
    const styleMobile:React.CSSProperties = { width: 328, borderRadius: 2 , paddingBlock:32,  paddingInline:16, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}

  return (
    <Card
        style={sm ? styleDestop: styleMobile}
    >
        {children}
    </Card>
  )
}
