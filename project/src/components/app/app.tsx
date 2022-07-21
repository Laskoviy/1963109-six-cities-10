import MainPage from '../../pages/mainPage/main';

type Props = {
  countOfAvailablePlaces: number;
};

//В App получите эти данные из props и передайте их в компонент главной страницы приложения.
function App({countOfAvailablePlaces}:Props): JSX.Element {
  return (
    <MainPage countOfAvailablePlaces = {countOfAvailablePlaces}/>
  );
}

export default App;
