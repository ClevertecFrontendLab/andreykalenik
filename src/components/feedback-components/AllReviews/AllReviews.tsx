import { Button, Layout, List } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { useDeferredValue, useState } from 'react';
import { toggleModalReview } from '@redux/reducers/uiSlice';

import styles from './AllReviews.module.scss';
import { useGetFeedbacksQuery } from '../../../services/feedbackApi';
import { SingleReview } from '..';

const { Content } = Layout;

export const AllReviews = () => {
    const [isAllFeedbacks, setIsAllFeedbacks] = useState(false);
    const { data } = useGetFeedbacksQuery();
    const feedbacks = isAllFeedbacks ? data : data?.slice(0, 4);
    const deferredFeedbacks = useDeferredValue(feedbacks);
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
                        dataSource={deferredFeedbacks}
                        renderItem={(item) => <SingleReview data={item} />}
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
