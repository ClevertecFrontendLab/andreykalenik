import { ThemeConfig } from 'antd';

export const AntTheme:ThemeConfig ={
            
    token:{
        fontFamily:'Inter',
        lineHeight: 1.3,
        colorPrimary:'#2f54eb',
        colorText:"#262626",
        colorTextSecondary:"#8C8C8C",
        colorLink:"#2f54eb",
        colorErrorText:"#262626"
    },
    components:{
        Card:{
            borderRadiusLG:2,
            borderRadiusSM:2,
            borderRadiusXS:2,
            borderRadiusOuter:2,
            colorBorder:'none'
        },

        Input:{
            borderRadius:2,
            borderRadiusLG:2,
            borderRadiusSM:2,
            borderRadiusXS:2,
            borderRadiusOuter:2,
            fontSize:14,
            fontSizeLG:14,
            fontSizeSM:14,
            fontSizeXL:14,
            controlHeight:40,
            
        },
        
        Button:{
            borderRadius:2,
            borderRadiusLG:2,
            borderRadiusSM:2,
            borderRadiusXS:2,
            borderRadiusOuter:2,
            controlHeight:40,
            fontSize:16,
        },
        Breadcrumb:{
            lastItemColor:'#262626',
        }
    
    }
}