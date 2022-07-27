import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section>
            <h1>Страница не найдена</h1>
            <p>Ошибка 404 - страница не найдена.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
