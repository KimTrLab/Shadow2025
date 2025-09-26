import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter  from './LinkRouter/MainRouter';
//import reportWebVitals from './reportWebVitals';
import { store } from './store/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 // <React.StrictMode>
    
    <Provider store={store}>
      <MainRouter />
    </Provider>
 // </React.StrictMode>
);


// Strict Mode는 개발 환경에서 리액트 애플리케이션의 문제를 발견하기 위해 
// 일부 컴포넌트 라이프사이클을 의도적으로 두 번 호출합니다. 
// 이는 실제 배포 시에는 발생하지 않으며, 개발 중에만 발생하는 현상입니다.

//reportWebVitals();
//React 애플리케이션에서 성능 측정을 위해 사용하는 함수입니다.
// 이 함수는 Web Vitals API를 활용하여 페이지 로딩 성능, 사용자 경험, 상호작용 등을 측정할 수 있도록 도와줍니다.
