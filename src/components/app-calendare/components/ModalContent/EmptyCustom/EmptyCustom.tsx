import { Empty } from 'antd';

import styles from './EmptyCustom.module.scss';

export const EmptyCustom = ({ description = false }: { description?: string | boolean }) => (
    <Empty
        className={styles['empty']}
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        imageStyle={{
            height: 32,
            width: 32,
        }}
        description={description}
    />
);
