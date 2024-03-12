import { SettingOutlined } from '@ant-design/icons';
import { Typography, Button, Grid } from 'antd';
import { AppBreadcrumb } from '@components/app-breadcrumb';
import styles from './AppHeader.module.scss';
import { useLocation } from 'react-router-dom';
import { Path } from '@utils/constants';

const { Link } = Typography;
const { useBreakpoint } = Grid;

export const AppHeader: React.FC = () => {
    const { lg, xs } = useBreakpoint();

    const isMainPage = useLocation().pathname === Path.MAIN;
    return (
        <header className={isMainPage ? styles.header : styles.headerAlternative}>
            {isMainPage ? (
                <>
                    <p className={styles.headerTitle}>Главная</p>
                    <h1 className={styles.h1}>
                        Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться
                        своей мечты!
                    </h1>
                    <div className={styles.headerActionsWrapper}>
                        {lg ? (
                            <Link style={{ display: 'flex', gap: '10px', color: '#262626' }}>
                                <SettingOutlined />
                                Настройки
                            </Link>
                        ) : xs ? (
                            <Button
                                style={{
                                    fontSize: 14,
                                    borderRadius: '50%',
                                    border: '1px solid #D9D9D9',
                                    background: '#fff',
                                    padding: 9,
                                }}
                                type='text'
                                icon={<SettingOutlined />}
                            />
                        ) : (
                            <Link style={{ color: '#262626' }}>Настройки</Link>
                        )}
                    </div>
                </>
            ) : (
                <AppBreadcrumb />
            )}
        </header>
    );
};
