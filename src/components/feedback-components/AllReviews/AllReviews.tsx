import { Button, Layout, List, Avatar, Card } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { useState } from 'react';
import { toggleModalReview } from '@redux/reducers/uiSlice';
import { UserOutlined } from '@ant-design/icons';

import styles from './AllReviews.module.scss';
import { useGetFeedbacksQuery } from '../../../services/feedbackApi';
import Rating from '@components/rating/rating';
import type { Feedback } from '../../../services/feedbackApi';

const { Content } = Layout;

export const AllReviews = () => {
    const [isAllFeedbacks, setIsAllFeedbacks] = useState(false);
    const { data } = useGetFeedbacksQuery();
    const feedbacks = isAllFeedbacks ? data : data?.slice(0, 4);
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(toggleModalReview());
    const handleShowAllFeedbacks = () => {
        setIsAllFeedbacks(!isAllFeedbacks);
    };
    return (
        <Content className={styles.wrapper}>
            <>
                <div className={styles.listWrapper}>
                    <List
                        dataSource={feedbacks}
                        renderItem={(item) => <FeedbackItem data={item} />}
                    />
                </div>
                <div className={styles.actions}>
                    <Button
                        type='primary'
                        size='large'
                        onClick={handleClick}
                        data-test-id='write-review'
                    >
                        Написать отзыв
                    </Button>
                    <Button
                        type='link'
                        size='large'
                        onClick={handleShowAllFeedbacks}
                        data-test-id='all-reviews-button'
                    >
                        {isAllFeedbacks ? 'Cвернуть' : 'Развернуть'} все отзывы
                    </Button>
                </div>
            </>
        </Content>
    );
};

const FeedbackItem: React.FC<{ data: Feedback }> = ({ data }) => {
    const { fullName, imageSrc, message, rating, createdAt } = data;
    let firstName = '';
    let lastName = '';
    if (fullName) {
        [firstName, lastName] = fullName.split(' ');
    }

    return (
        <Card className={styles.reviewWrapper}>
            <div className={styles.reviewAvatar}>
                {imageSrc && <Avatar size={42} src={imageSrc} />}
                {!imageSrc && <Avatar size={42} icon={<UserOutlined />} />}
            </div>
            <div className={styles.reviewName}>
                {fullName ? firstName : 'Пользователь'} <br />
                {lastName}
            </div>
            <div className={styles.reviewMeta}>
                <Rating rating={rating} isDisable={true} />
                {createdAt}
            </div>
            <div className={styles.reviewMessage}>{message}</div>
        </Card>
    );
};
