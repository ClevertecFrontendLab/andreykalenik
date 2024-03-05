import { Card, Typography, Button, Grid, Layout } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';

import { toggleModalReview } from '@redux/reducers/uiSlice';
import styles from './FirstReview.module.scss';

const { Title, Paragraph } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

export const FirstReview = () => {
    const dispatch = useAppDispatch();
    const { sm } = useBreakpoint();
    const handleClick = () => dispatch(toggleModalReview());
    return (
        <Content className={styles.wrapper}>
            <div className={styles.firstReview}>
                <Card style={{ paddingBottom: 56 }}>
                    <Title
                        level={3}
                        style={{
                            color: '#061178',
                            fontWeight: 500,
                            fontSize: 24,
                            textAlign: 'center',
                            marginBlock: 48,
                        }}
                    >
                        Оставьте свой отзыв первым
                    </Title>
                    <Paragraph
                        style={{
                            color: '#8C8C8C',
                            fontSize: 14,
                            lineHeight: 1.3,
                            maxWidth: 521,
                            marginInline: 'auto',
                            textAlign: 'center',
                            marginBottom: 0,
                        }}
                    >
                        Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                        Поделитесь своим мнением и опытом с другими пользователями, и помогите им
                        сделать правильный выбор.
                    </Paragraph>
                </Card>
                <Button
                    type='primary'
                    style={
                        sm
                            ? {
                                  width: 142,
                                  marginBlock: 20,
                                  marginInline: 'calc(50% - calc(142px / 2))',
                                  fontSize: 14,
                              }
                            : { width: '100%', marginBlock: 20, fontSize: 14 }
                    }
                    data-test-id='write-review'
                    onClick={handleClick}
                >
                    Написать отзыв
                </Button>
            </div>
        </Content>
    );
};
