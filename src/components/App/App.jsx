import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useState } from 'react';
import HeaderPopup from '../HeaderPopup/HeaderPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  function handleBurgerClick() {
    setIsOpen(true)
  }

  function handleCloseClick() {
    setIsOpen(false)   
  }
     
  return (
    <div className="App">
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
                name='mainProfile' />
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
                name='mainMovies' />
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
                name='mainMovies' />
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
          <Main
            name='mainSignUp'
          /> 
      } />     

      <Route path='signin' element={
        <Main
          name='mainSignIn'
        />   
      }/>  

      <Route path='*' element={
        <Main name='pageNotFound' />
      } />
            
      </Routes>        
    </div>
  )
}

export default App;
