<<<<<<< HEAD
import Main from '../../pages/main/main';

type AppProps = {
  filmName: string;
  yearFilm: number;
  filmGenre: string;
}

function App({filmName, yearFilm, filmGenre}: AppProps): JSX.Element {
  return <Main filmName={filmName} yearFilm={yearFilm} filmGenre={filmGenre}/>;
=======
function App(): JSX.Element {
  return <p>Hello, world!</p>;
>>>>>>> 8db599a4d172b8c365072aa614e9b594def69df6
}

export default App;
