import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

const NotFoundPage: React.FC = () => (
  <div className="page--gray">
    <Header isHideUserSection />

    <main className="page__main page__main--favorites">
      <div className="page__not__found page__favorites-container container">
        <section>
          <h1 className="not__found__error">404</h1>
          <p className="not__found__error__text">PAGE NOT FOUND</p>

          <Link className="not__found__link__home__page" to="/">HOME PAGE</Link>
        </section>
      </div>
    </main >
  </div >
);

export default NotFoundPage;
