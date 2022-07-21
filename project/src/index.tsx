import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

//В файле index.tsx опишите данные, которые нужны в компоненте главной страницы приложения.
//Передайте их в компонент App.
const COUNT_OF_AVAILABLE_PLACES = 10;

root.render(
  <React.StrictMode>
    <App countOfAvailablePlaces={COUNT_OF_AVAILABLE_PLACES}/>
  </React.StrictMode>,
);
