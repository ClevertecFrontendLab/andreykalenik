import { SettingOutlined } from '@ant-design/icons';
import { Typography, Button, Grid } from 'antd';
import { AppBreadcrumb } from '@components/app-breadcrumb';
import styles from './AppHeader.module.scss';
import { useLocation } from 'react-router-dom';
import { Path } from '@utils/constants';
import { Colors } from '@utils/colors';

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
                        Приветствуем тебя <br />в CleverFit — <br />
                        приложении, <br />
                        которое поможет тебе <br />
                        добиться своей <br />
                        мечты!
                    </h1>
                    <div className={styles.headerActionsWrapper}>
                        {lg ? (
                            <Link
                                style={{
                                    display: 'flex',
                                    gap: '10px',
                                    color: `${Colors.character_light_title_85}`,
                                }}
                            >
                                <SettingOutlined />
                                Настройки
                            </Link>
                        ) : xs ? (
                            <Button
                                style={{
                                    fontSize: 14,
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    border: `1px solid ${Colors.character_light_border}`,
                                    background: `${Colors.character_light_sider_background}`,
                                    padding: '7px 8px',
                                }}
                                type='text'
                                icon={<SettingOutlined />}
                            />
                        ) : (
                            <Link style={{ color: `${Colors.character_light_title_85}` }}>
                                Настройки
                            </Link>
                        )}
                    </div>
                </>
            ) : (
                <AppBreadcrumb />
            )}
        </header>
    );
};
