import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
//import { movies, savedMovies } from '../../utils/initialMovies';


function SavedMovies({ saveMovies }) {
  
  return (
    <>
        <SearchFilms />
        <MoviesCardList
          saveMovies={saveMovies} />
      </> 
  )
}

export default SavedMovies;
