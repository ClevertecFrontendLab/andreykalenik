import Lottie from 'lottie-react';
import loaderAnimation from './loader.json';
import './App-Loader.modules.scss';

export const AppLoader: React.FC = () => (
    <div className='loaderWrapper'>
        <Lottie
            animationData={loaderAnimation}
            className='appLoader'
            data-test-id='loader'
            loop={true}
        />
    </div>
);
