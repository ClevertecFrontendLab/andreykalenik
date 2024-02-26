import {Layout, Card, Typography  } from 'antd';
import {
    CalendarTwoTone,
    IdcardOutlined,
    HeartFilled,
    AppleFilled,
    AndroidFilled,
  } from '@ant-design/icons';

import styles from './MainLayout.module.scss';

const { Content } = Layout;
const {Link} = Typography;

export const MainLayout:React.FC = () => 
    <Content className={styles.contentWrapper}>
        <Card className={styles.cardBenefits}>
        С CleverFit ты сможешь:
        <ul>
            <li>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</li>
            <li>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</li>
            <li>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</li>
            <li>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</li>
        </ul> 
        </Card>
        <Card className={styles.cardAbout} >
        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
        </Card>

        <div className={styles.cardsFlexWrapper}>
            <Card size="small" title="Расписать тренировки" className={styles.cardWorkouts}>
                <Link>
                    <HeartFilled/>
                    Тренировки
                </Link>
            </Card>

            <Card size="small" title="Назначить календарь" className={styles.cardCalendar} >
                <Link>
                    <CalendarTwoTone twoToneColor='#2F54EB'/>
                    Календарь
                </Link>
            </Card>
            <Card size="small" title="Заполнить профиль" className={styles.cardProfile}>
                <Link>
                    <IdcardOutlined/>
                    Профиль
                </Link>
            </Card>
        </div>

        <Link className={styles.linkReviews}>
            Смотреть отзывы
        </Link>
        <Card title={<p><p>Скачать на телефон</p><p> Доступно в PRO-тарифе</p></p>} className={styles.cardMobileApp}>
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
