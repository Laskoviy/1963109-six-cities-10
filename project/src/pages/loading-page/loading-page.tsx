import React from 'react';
import './loading-page.css';


const LoadingPage: React.FC = () => (
  <div className="loading__container">
    <div className="lds-ring loading__position">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div >
);

export default LoadingPage;
