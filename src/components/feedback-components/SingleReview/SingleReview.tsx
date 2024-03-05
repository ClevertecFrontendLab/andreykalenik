import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './SingleReview.module.scss';

import type { Feedback } from '../../../services/feedbackApi';
import { Rating } from '@components/rating/rating';

export const SingleReview: React.FC<{ data: Feedback }> = ({ data }) => {
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
