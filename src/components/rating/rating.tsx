import { Rate } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

type FeedbackProps = {
    rating: number;
    isDisable?: boolean;
    fontSize?: number;
    onChange?: (value: 0 | 1 | 2 | 3 | 4 | 5) => void;
};

const Rating = ({ rating, isDisable = false, fontSize = 14, onChange }: FeedbackProps) => {
    return (
        <Rate
            disabled={isDisable}
            character={({ index, value }) => {
                if (index !== undefined && value !== undefined) {
                    return value > index ? (
                        <StarFilled size={45} style={{ color: '#faad14', fontSize: fontSize }} />
                    ) : (
                        <StarOutlined style={{ color: '#faad14', fontSize: fontSize }} />
                    );
                }
            }}
            defaultValue={rating}
            onChange={(value) => {
                if ([0, 1, 2, 3, 4, 5].includes(value) && onChange) {
                    onChange(value as 0 | 1 | 2 | 3 | 4 | 5);
                }
            }}
            style={{ height: fontSize, lineHeight: `${fontSize}px` }}
        />
    );
};

export default Rating;
