import { Provider } from 'react-redux';

import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ConfigProvider } from 'antd';
import { store, history } from '@redux/configure-store';
import 'antd/dist/antd.variable.min.css';

import { routes } from './router';
import { Colors } from './utils';

ConfigProvider.config({
    theme: {
        primaryColor: Colors.primary_light_7,
    },
});

export const App: React.FC = () => (
    <ConfigProvider>
        <Provider store={store}>
            <Router history={history}>{routes}</Router>
        </Provider>
    </ConfigProvider>
);
