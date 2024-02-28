import { SettingOutlined } from '@ant-design/icons';
import { Typography, Button, Grid } from 'antd'

import styles from './AppHeader.module.scss';


const {Link} = Typography
const { useBreakpoint } = Grid;


export const AppHeader:React.FC = () =>{
    const {lg, md, xs} = useBreakpoint()
    return(
    <header className={styles.header} >
        <p className={styles.headerTitle}>Главная</p>
        <h1 className={styles.h1}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
        <div className={styles.headerActionsWrapper}>
            {
            lg ?
                <Link style={{display:'flex', gap:'10px', color:'#262626'}}>
                    <SettingOutlined />
                    Настройки
                </Link> : 
            xs && md ?
                <Link style={{color:'#262626'}}>
                        Настройки
                </Link> :
                <Button style={{borderRadius:'50%',border:'1px solid #D9D9D9', background:'#fff'}}
                type="text"
                icon={<SettingOutlined/>}
                /> 
            }
        </div>   
    </header>
    )
}
