import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';


const ExitSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 15 16">
        <path d="M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z" fill="currentColor"/>
    </svg>
  );

const ExitIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ExitSvg} {...props} />
  );

const LogoSvg = () =>(
    <svg width="204" height="64" viewBox="0 0 208 64" fill="none">
        <rect width="208" height="64" fill="white"/>
        <path d="M115.263 30.1457H119.923V33.1985H119.992C120.2 32.7215 120.51 32.2445 120.925 31.7993C121.304 31.3541 121.753 31.0043 122.271 30.6863C122.754 30.3683 123.307 30.1457 123.894 29.9549C124.446 29.7959 125.067 29.7323 125.689 29.7005C126 29.7005 126.345 29.7641 126.759 29.8595V34.0571C126.517 34.0253 126.241 33.9935 125.93 33.9617C125.585 33.9299 125.275 33.8981 124.998 33.8981C124.101 33.8981 123.341 34.0571 122.72 34.3115C122.098 34.5977 121.581 34.9793 121.201 35.4563C120.821 35.9333 120.545 36.4739 120.407 37.11C120.234 37.746 120.165 38.4456 120.165 39.177V46.6606H115.263V30.1457Z" fill="#10239E"/>
        <path d="M108.661 36.6012C108.42 35.4563 108.006 34.5977 107.419 33.9935C106.832 33.4211 105.934 33.1349 104.76 33.1031C103.966 33.1031 103.31 33.2303 102.792 33.4847C102.275 33.7391 101.86 34.0253 101.55 34.3751C101.239 34.7567 101.032 35.1383 100.894 35.5199C100.756 35.9333 100.687 36.2831 100.687 36.6012H108.661ZM100.687 39.4632C100.756 40.926 101.135 42.0072 101.895 42.6432C102.62 43.311 103.69 43.629 105.071 43.629C106.038 43.629 106.901 43.4064 107.626 42.9612C108.316 42.516 108.765 42.0072 108.938 41.4984H113.253C112.563 43.47 111.492 44.901 110.077 45.7278C108.627 46.5864 106.901 46.9998 104.898 46.9998C103.483 46.9998 102.206 46.809 101.101 46.3956C99.9615 45.9822 98.9949 45.378 98.2354 44.6148C97.4413 43.8516 96.8199 42.9612 96.4056 41.88C95.9913 40.8306 95.7842 39.654 95.7842 38.382C95.7842 37.1736 95.9913 36.0287 96.4401 34.9475C96.8544 33.8981 97.4758 32.9759 98.3044 32.2127C99.0984 31.4495 100.065 30.8135 101.17 30.3683C102.275 29.9231 103.517 29.7005 104.898 29.7005C106.417 29.7005 107.729 29.9867 108.869 30.5273C109.973 31.0679 110.906 31.7993 111.631 32.6897C112.356 33.6119 112.873 34.6613 113.219 35.8061C113.529 36.9828 113.633 38.1912 113.564 39.4632H100.687Z" fill="#10239E"/>
        <path d="M89.7615 46.6606H84.3068L78.2275 30.1457H83.3716L87.1346 41.3711H87.2037L90.9667 30.1457H95.8346L89.7615 46.6606Z" fill="#10239E"/>
        <path d="M73.3177 36.6012C73.0761 35.4563 72.6618 34.5977 72.0749 33.9935C71.488 33.4211 70.5904 33.1349 69.4166 33.1031C68.6225 33.1031 67.9666 33.2303 67.4487 33.4847C66.9309 33.7391 66.5166 34.0253 66.2059 34.3751C65.8952 34.7567 65.688 35.1383 65.5499 35.5199C65.4118 35.9333 65.3428 36.2831 65.3428 36.6012H73.3177ZM65.3428 39.4632C65.4118 40.926 65.7916 42.0072 66.5511 42.6432C67.2761 43.311 68.3463 43.629 69.7273 43.629C70.6939 43.629 71.557 43.4064 72.282 42.9612C72.9725 42.516 73.4213 42.0072 73.5939 41.4984H77.9094C77.2189 43.47 76.1487 44.901 74.7332 45.7278C73.2832 46.5864 71.557 46.9998 69.5547 46.9998C68.1392 46.9998 66.8618 46.809 65.7571 46.3956C64.6178 45.9822 63.6511 45.378 62.8916 44.6148C62.0976 43.8516 61.4761 42.9612 61.0619 41.88C60.6476 40.8306 60.4404 39.654 60.4404 38.382C60.4404 37.1736 60.6476 36.0287 61.0964 34.9475C61.5107 33.8981 62.1321 32.9759 62.9607 32.2127C63.7547 31.4495 64.7214 30.8135 65.8261 30.3683C66.9309 29.9231 68.1737 29.7005 69.5547 29.7005C71.0737 29.7005 72.3856 29.9867 73.5249 30.5273C74.6296 31.0679 75.5618 31.7993 76.2868 32.6897C77.0118 33.6119 77.5296 34.6613 77.8748 35.8061C78.1856 36.9828 78.2891 38.1912 78.2201 39.4632H65.3428Z" fill="#10239E"/>
        <path d="M53.8569 23.1285H58.6902V46.6606H53.8569V23.1285Z" fill="#10239E"/>
        <path d="M46.5473 31.2246C46.4435 30.6575 46.2358 30.1535 45.9243 29.6809C45.5782 29.2084 45.1975 28.7989 44.713 28.4209C44.2285 28.0743 43.6747 27.7908 43.0517 27.6018C42.4287 27.4128 41.8057 27.3183 41.1482 27.2868C39.9022 27.2868 38.8639 27.5073 38.0332 27.9483C37.168 28.3894 36.4758 28.9564 35.9566 29.6809C35.4029 30.4055 35.0222 31.2246 34.7799 32.1381C34.5376 33.0832 34.4338 34.0282 34.4338 35.0048C34.4338 35.9499 34.5376 36.895 34.7799 37.777C35.0222 38.6591 35.4029 39.4781 35.9566 40.1712C36.4758 40.8957 37.168 41.4628 38.0332 41.9038C38.8639 42.3448 39.9022 42.5338 41.1482 42.5338C42.8094 42.5338 44.09 42.0928 45.0245 41.1478C45.959 40.2342 46.5473 39.0056 46.755 37.4935H52.0157C51.8773 38.9111 51.4966 40.1712 50.9428 41.3053C50.3544 42.4393 49.593 43.4159 48.6585 44.2035C47.6895 45.0225 46.5819 45.6211 45.336 46.0306C44.0554 46.4716 42.671 46.6606 41.1482 46.6606C39.2446 46.6606 37.5487 46.3771 36.0259 45.7786C34.503 45.18 33.257 44.361 32.2187 43.2899C31.1804 42.2503 30.3844 41.0217 29.8306 39.6041C29.2769 38.1865 29 36.6429 29 35.0048C29 33.3352 29.2769 31.7916 29.8306 30.3425C30.3844 28.8934 31.1804 27.6333 32.2187 26.5622C33.257 25.5226 34.503 24.6721 36.0259 24.042C37.5487 23.4435 39.2446 23.16 41.1482 23.1285C42.4979 23.1285 43.7785 23.3175 44.9899 23.664C46.2012 24.042 47.2741 24.5461 48.2432 25.2391C49.2123 25.9322 50.0083 26.7512 50.6313 27.7593C51.2543 28.7674 51.635 29.933 51.8081 31.2246H46.5473Z" fill="#10239E"/>
        <path d="M156.752 25.2548H160.995V29.8166H156.752V38.5335C156.752 41.5003 156.936 41.4915 157.305 41.8391C157.673 42.1866 158.409 42.3604 159.514 42.3604C159.882 42.4039 160.205 42.3604 160.573 42.317C160.895 42.317 161.34 42.0709 161.57 41.8391V46.6181C160.995 46.8634 160.343 47.1394 159.698 47.1394C159.008 47.1829 158.363 47.1829 157.719 47.1829C157.676 47.1829 156.947 47.1829 156.64 47.1394C155.893 47.0336 154.781 46.6398 154.09 46.2488C153.707 46.0316 152.709 45.0541 152.594 44.6196C152.249 44.0765 152.057 43.0121 152.057 41.8825V29.8166H147.991V25.2548H152.057V17.6518H156.752V25.2548Z" fill="#10239E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M127.737 29.8166H130.96V46.6615H136.115V29.8166H139.936L139.936 25.2548H136.115L136.115 24.8638C136.115 23.9514 136.299 23.085 136.667 22.694C137.036 22.303 137.68 22.0857 138.601 22.0857C139.429 22.0857 140.212 22.1292 140.994 22.2161V17.6518L139.245 17.6518L137.519 17.6518C135.332 17.6518 133.606 18.7042 132.571 19.7154C131.236 21.0188 130.96 22.5177 130.96 24.4728L130.959 25.2548H127.737L127.737 29.8166ZM146.61 31.7716H141.593V46.6615H146.61V31.7716Z" fill="#10239E"/>
        <path d="M146.61 27.5792C146.61 28.9026 145.517 29.9754 144.194 29.9754C142.87 29.9754 141.777 28.9026 141.777 27.5792C141.777 26.2557 142.87 25.1829 144.194 25.1829C145.517 25.1829 146.61 26.2557 146.61 27.5792Z" fill="#40A9FF"/>
    </svg>
)

const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LogoSvg} {...props} />
  );

const  LogoSmallSvg = () =>(
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" fill="white"/>
        <path d="M42.2449 28.2068H45.7078V31.9386H42.2449V39.0696C42.2449 41.4966 42.3952 41.4894 42.6957 41.7737C42.9963 42.058 43.5974 42.2002 44.4991 42.2002C44.7997 42.2357 45.0627 42.2002 45.3632 42.1647C45.6262 42.1647 45.9896 41.9633 46.1774 41.7737V45.6832C45.7078 45.8839 45.1754 46.1097 44.6494 46.1097C44.0858 46.1453 43.5599 46.1453 43.0339 46.1453C42.9987 46.1453 42.4038 46.1453 42.1533 46.1097C41.5432 46.0231 40.6358 45.701 40.0723 45.3811C39.7592 45.2034 38.9452 44.4038 38.8513 44.0483C38.5695 43.6041 38.4127 42.7333 38.4127 41.8093V31.9386H35.0942V28.2068H38.4127V21.9871H42.2449V28.2068Z" fill="#10239E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5635 31.9386H21.1934V45.7188H25.4013V31.9386H28.5196L28.5196 28.2068H25.4013L25.4013 27.887C25.4013 27.1406 25.5516 26.4318 25.8521 26.1119C26.1527 25.7921 26.6787 25.6144 27.4301 25.6144C28.1063 25.6144 28.745 25.6499 29.3837 25.721V21.9871L27.9561 21.9871L26.5472 21.9871C24.7626 21.9871 23.3537 22.8481 22.5083 23.6753C21.4188 24.7416 21.1934 25.9677 21.1934 27.5671L21.1934 28.2068H18.5635L18.5635 31.9386ZM33.9673 33.538H29.8721V45.7188H33.9673V33.538Z" fill="#10239E"/>
        <path d="M33.9673 30.1083C33.9673 31.1909 33.0775 32.0686 31.9948 32.0686C30.9122 32.0686 30.0224 31.1909 30.0224 30.1083C30.0224 29.0257 30.9122 28.148 31.9948 28.148C33.0775 28.148 33.9673 29.0257 33.9673 30.1083Z" fill="#40A9FF"/>
    </svg>

)

const LogoSmallIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LogoSmallSvg} {...props} />
  );  

  export {ExitIcon, LogoIcon, LogoSmallIcon}