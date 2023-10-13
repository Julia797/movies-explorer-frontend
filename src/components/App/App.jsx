import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import HeaderPopup from '../HeaderPopup/HeaderPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { autorize, getContent, getMovies, getUserInfo, register, setUserInfo } from '../../utils/MainApi'
import Preloader from '../Preloader/Preloader';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isCheckToken, setIsCheckToken] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  //const [username, setUsername] = useState('')
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
  
  /*useEffect(() => {
    if (isOpenEdit) {
      setUsername(currentUser.name);
      setUserEmail(currentUser.email);
    }
  }, [isOpenEdit, currentUser.name, currentUser.email]);*/

  useEffect(() => {

    if (localStorage.token) {
    //setIsLoadingCards(true)
    Promise.all([getUserInfo(localStorage.token), getMovies(localStorage.token)])
    .then(([dataUserInfo, dataInitialSavedMovie]) => {
      console.log(dataUserInfo);
      setCurrentUser(dataUserInfo)
      setIsLoggedIn(true)
      setIsCheckToken(false)
      setSaveMovies(dataInitialSavedMovie.reverse())
     // setIsLoadingMovies(false)
    })
    .catch((err) => {
      console.log('Ошибка. Начальные данные не созданы: ', err);
      setIsCheckToken(false)
      localStorage.clear()
    });
  } else {
      setIsLoggedIn(false)
      setIsCheckToken(false)
      //localStorage.clear()
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
                name='mainMovies' 
                saveMovies={saveMovies}
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
