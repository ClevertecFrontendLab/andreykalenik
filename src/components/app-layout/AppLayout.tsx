import { AppHeader } from "@components/app-header";
import { AppSider } from "@components/app-sider";
import { useAppSelector } from "@hooks/typed-react-redux-hooks";
import { selectLoadingMutation, selectLoadingQuery } from "@utils/selectors";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import { AppLoader } from "@components/app-loader";

export const AppLayout = () => {
    const isLoadingMutation = useAppSelector(selectLoadingMutation);
    const isLoadingQuery = useAppSelector(selectLoadingQuery);

    return (
        <>
            {(isLoadingMutation || isLoadingQuery) && <AppLoader />}
            <Layout className={styles.appLayout}>
                <AppSider />
                <Layout className={styles.appContent}>
                    <AppHeader />
                    <Outlet />
                </Layout>
            </Layout>
        </>
    );
};
