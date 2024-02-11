import { SettingOutlined } from '@ant-design/icons';
import {Typography, Button} from 'antd'
import React from 'react';
import styles from './AppHeader.module.scss';

type AppHeaderProps = {
    screenWidht:number,
    mobileBreakpoint:number,
    padBreakpoint:number

}

const {Link} = Typography

export const AppHeader:React.FC<AppHeaderProps> = ({screenWidht, mobileBreakpoint, padBreakpoint}) =>{
    return(
        <header className={styles.header} >
        <p className={styles.headerTitle}>Главная</p>
        <h1 className={styles.h1}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
        <div className={styles.headerActionsWrapper}>
            {
            (screenWidht > padBreakpoint) ?
                <Link style={{display:'flex', gap:'10px', color:'#262626'}}>
                    <SettingOutlined />
                    Настройки
                </Link> : 
            (screenWidht > mobileBreakpoint) ?
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