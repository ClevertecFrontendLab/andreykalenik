import Lottie from 'lottie-react';
import loaderAnimation from './loader.json';
import './App-Loader.scss';

export const AppLoader: React.FC = () => (
    <div className='loaderWrapper' data-test-id='loader'>
        <Lottie animationData={loaderAnimation} className='appLoader' loop={true} />
    </div>
);
