import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import HeaderPopup from '../HeaderPopup/HeaderPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { addMovie, autorize, deleteMovie, getMovies, getUserInfo, register, setUserInfo } from '../../utils/MainApi'
import Preloader from '../Preloader/Preloader';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isCheckToken, setIsCheckToken] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [saveMovies, setSaveMovies] = useState(false)
  const navigate = useNavigate()

  function handleBurgerClick() {
    setIsOpen(true)
  }

  function handleCloseClick() {
    setIsOpen(false)   
  }

  function handleButtonEditClick(evt) {
    evt.preventDefault()
    setIsOpenEdit(true)
  }
 
  function handleDeleteMovie(movieId) {
    deleteMovie(movieId, localStorage.token)
     .then(() => {
       setSaveMovies(saveMovies.filter(movie => { return movie._id !== movieId }))
     })
     .catch((err) => console.error('Ошибка. Удалить фильм не получилось' , err))
 }
  
  function handleMovieLike(movie)  {
    const isSaved = saveMovies.some((item) => movie.id === item.movieId);
      if (isSaved) {
      const updatedMovies = saveMovies.filter(item => item.movieId === movie.id);
      handleDeleteMovie(updatedMovies[0]._id)
    } else {
      addMovie(movie, localStorage.token)
        .then(res => {
          console.log(res)
          console.log([res, ...saveMovies])
          setSaveMovies([res, ...saveMovies]);
        })
        .catch((err) => {
          console.log('Ошибка. Сохранить фильм не получилось: ', err);
        });
    }
  };

  useEffect(() => {

    if (localStorage.token) {
      Promise.all([getUserInfo(localStorage.token), getMovies(localStorage.token)])
        .then(([dataUserInfo, dataInitialSavedMovie]) => {
          setCurrentUser(dataUserInfo)
          setIsLoggedIn(true)
          setIsCheckToken(false)
          setSaveMovies(dataInitialSavedMovie.reverse())
    })
    .catch((err) => {
      console.log('Ошибка. Начальные данные не созданы: ', err);
      setIsCheckToken(false)
      localStorage.clear()
    });
  } else {
      setIsLoggedIn(false)
      setIsCheckToken(false)
    
  }
  }, [isLoggedIn])
  
  function handleRegister(username, email, password, resetForm) {
    setIsSending(true)
    register(username, email, password)
    .then(() => {
      resetForm({ username: '', email: '', password: '' })
      navigate('/movies')
    })
    .catch((err) => {
      
      console.log('Ошибка. Зарегистрировать пользователя на сервере не получилось: ', err);
    })
    .finally(() => setIsSending(false))
  }
  
  function handleLogin(email, password, resetForm) {
    setIsSending(true)
    autorize(email, password)
    .then(res => {
      localStorage.setItem('token', res.token)
      setIsLoggedIn(true)
      resetForm({ email: '', password: '' })
      window.scrollTo(0, 0)
      navigate('/movies')
    })
    .catch((err) => {
      console.log('Ошибка. Войти не получилось: ', err);
    })
    .finally(() => 
    setIsSending(false))
  }

  function handleUpdateUser(username, email, resetForm) {
    setIsSending(true)
    setUserInfo(username, email, localStorage.token)
      .then(res => {
        setCurrentUser(res)
        setIsOpenEdit(false)
        resetForm()
       })
      .catch((err) => {
        console.log('Ошибка. Обновить данные пользователя на сервере не получилось: ', err);
      })
      .finally(() => setIsSending(false))
  }
  
    function outOfAccount() {
      localStorage.clear()
      setIsLoggedIn(false)
      navigate('/')
    }
     
  return (

    <div className="App">
      {isCheckToken ? <Preloader /> :
      <CurrentUserContext.Provider value = {currentUser}>

      <Routes>
        <Route path='/' element={
          <>
            <Header 
              nameHeader='home'  isLoggedIn={isLoggedIn}
              onClick={handleBurgerClick}
              />
            <Main 
              name='mainHomePage' />
            <HeaderPopup 
              isOpen={isOpen}
              onClose={handleCloseClick}
            />
            <Footer />
          </>
        }/>
                  
      <Route path='/profile' element={
        <ProtectedRoute 
          isLoggedIn={isLoggedIn}
         
          element={
            <>
              <Header
                nameHeader='profile'
                onClick={handleBurgerClick}
              />
              <Main
                name='mainProfile' 
                handleButtonEditClick={handleButtonEditClick}
                isOpenEdit={isOpenEdit}
                setIsOpenEdit={setIsOpenEdit}
                handleUpdateUser={handleUpdateUser}
                outOfAccount={outOfAccount}
              />
              <HeaderPopup 
                isOpen={isOpen}
                onClose={handleCloseClick}
              />
            </> 
          }
        />
      }/>   

      <Route path='/movies' element={
        <ProtectedRoute 
          isLoggedIn={isLoggedIn}
          element={
            <>
              <Header 
                nameHeader = 'movies'
                onClick={handleBurgerClick}
              />
              <Main
                name='mainMovies'
                saveMovies={saveMovies}
                handleMovieLike={handleMovieLike}
              />
              <Footer />
              <HeaderPopup 
                isOpen={isOpen}
                onClose={handleCloseClick}
              />
            </>
          }
        />
      }/>  

      <Route path='/saved-movies' element={
        <ProtectedRoute 
          isLoggedIn={isLoggedIn}
          element={
            <>
              <Header 
                nameHeader = 'saved-movies'
                onClick={handleBurgerClick}
              />
              <Main
                name='mainSavedMovies' 
                saveMovies={saveMovies}
                handleDeleteMovie={handleDeleteMovie}
              />
              <Footer />
              <HeaderPopup 
                isOpen={isOpen}
                onClose={handleCloseClick}
              />
            </>
          }
        />
      }/>   

      <Route path='/signup' element={
        isLoggedIn ? <Navigate to='/movies' replace /> :
          <Main
            name='mainSignUp'
            handleRegister={handleRegister}
          /> 
      } />     

      <Route path='signin' element={
        isLoggedIn ? <Navigate to='/movies' replace /> :
        <Main
          name='mainSignIn'
          handleLogin={handleLogin}
        />   
      }/>  

      <Route path='*' element={
        <Main name='pageNotFound' />
      } />
            
      </Routes>
      </CurrentUserContext.Provider> 
    }     
    </div>
  )
}

export default App;
