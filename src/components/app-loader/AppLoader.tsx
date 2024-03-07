import Lottie from "lottie-react";
import loaderAnimation from "./loader.json";
import styles from "./App-Loader.modules.scss";

export const AppLoader: React.FC = () => (
    <div className="loaderWrapper" data-test-id="loader">
        <Lottie animationData={loaderAnimation} className={styles.appLoader} loop={true} />
    </div>
);
