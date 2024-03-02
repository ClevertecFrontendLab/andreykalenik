import { Breadcrumb } from 'antd'
import { NavLink, useLocation} from 'react-router-dom';

import { ROUTER_PATHS } from '@utils/constants';


const breadcrumbNameMap: Record<string, string> = {
    [ROUTER_PATHS.MAIN]: 'Главная',
    [ROUTER_PATHS.FEEDBACKS]: 'Отзывы пользователей',
  };

export const AppBreadcrumb = () => {
  
  const location = useLocation();
  const path = location.pathname

    return (
        <Breadcrumb>
          <Breadcrumb.Item><NavLink to={ROUTER_PATHS.MAIN}>Главная</NavLink></Breadcrumb.Item>
          <Breadcrumb.Item>{breadcrumbNameMap[path]}</Breadcrumb.Item>
        </Breadcrumb>
  );
};


