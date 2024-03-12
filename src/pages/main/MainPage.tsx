import { useId } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Typography, Layout } from 'antd';
import { IdcardOutlined, HeartFilled, AppleFilled, AndroidFilled } from '@ant-design/icons';

import { Path } from '@utils/constants';
import styles from './MainPage.module.scss';
import { CalendarIcon } from '@components/project-icons';

const { Link } = Typography;
const { Content } = Layout;

type CardItem = {
    id: string;
    title: string;
    icon: React.ReactNode;
    link: string;
    path: Path;
};

export const MainPage: React.FC = () => {
    const cardList: CardItem[] = [
        {
            id: useId(),
            title: 'Расписать тренировки',
            icon: <HeartFilled />,
            link: 'Тренировки',
            path: Path.WORKOUTS,
        },
        {
            id: useId(),
            title: 'Назначить календарь',
            icon: <CalendarIcon />,
            link: 'Календарь',
            path: Path.CALENDARE,
        },
        {
            id: useId(),
            title: 'Заполнить профиль',
            icon: <IdcardOutlined />,
            link: 'Профиль',
            path: Path.PROFILE,
        },
    ];

    return (
        <Content className={styles.mainWrapper}>
            <Card className={`${styles.cardBenefits} ${styles.card}`}>
                С CleverFit ты сможешь:
                <ul>
                    <li>
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                    </li>
                    <li>
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с&nbsp;нормами и рекордами;
                    </li>
                    <li>
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                        о&nbsp;тренировках;
                    </li>
                    <li>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.
                    </li>
                </ul>
            </Card>
            <Card className={`${styles.cardAbout} ${styles.card}`}>
                CleverFit — это не просто приложение, а твой личный помощник в&nbsp;мире фитнеса. Не
                откладывай на завтра — начни тренироваться уже&nbsp;сегодня!
            </Card>

            <div className={styles.cardsFlexWrapper}>
                {cardList.map((card) => (
                    <Card
                        title={card.title}
                        key={card.id}
                        className={`${styles.card} ${styles.itemCard}`}
                        bordered={false}
                    >
                        <NavLink to={card.path} className={styles.cardLink}>
                            {card.icon} {card.link}
                        </NavLink>
                    </Card>
                ))}
            </div>

            <NavLink className={styles.linkReviews} data-test-id='see-reviews' to={Path.FEEDBACKS}>
                Смотреть отзывы
            </NavLink>
            <Card
                title={
                    <>
                        <p>Скачать на телефон</p>
                        <p> Доступно в PRO-тарифе</p>
                    </>
                }
                className={`${styles.card} ${styles.cardMobileApp}`}
            >
                <Link>
                    {<AndroidFilled />}
                    Android OS
                </Link>
                <Link>
                    {<AppleFilled />}
                    Apple iOS
                </Link>
            </Card>
        </Content>
    );
};
