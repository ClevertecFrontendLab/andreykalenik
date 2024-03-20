import { Breadcrumb } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

import { Path } from '@utils/constants';

const breadcrumbNameMap: Record<string, string> = {
    [Path.MAIN]: 'Главная',
    [Path.FEEDBACKS]: 'Отзывы пользователей',
    [Path.CALENDARE]: 'Календарь',
};

export const AppBreadcrumb = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <NavLink to={Path.MAIN}>Главная</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{breadcrumbNameMap[path]}</Breadcrumb.Item>
        </Breadcrumb>
    );
};
