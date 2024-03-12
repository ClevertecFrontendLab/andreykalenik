import { Provider } from 'react-redux';

import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ConfigProvider } from 'antd';
import { store, history } from '@redux/configure-store';

import { routes } from './router';

export const App: React.FC = () => (
    <ConfigProvider>
        <Provider store={store}>
            <Router history={history}>{routes}</Router>
        </Provider>
    </ConfigProvider>
);
