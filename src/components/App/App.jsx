import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useState } from 'react';
import HeaderPopup from '../HeaderPopup/HeaderPopup';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

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
              nameHeader='home'  loggedIn={loggedIn}
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
        } />
      
      <Route path='/signup' element={
          
          <Main
            name='mainSignUp'
            /> 
        
      } />     

      <Route path='signin' element={
        
          <Main
            name='mainSignIn'
          />   
        
      } />  
      
      <Route path='/profile' element={

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
        
      } />   

      <Route path='/movies' element={

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
      } />  

       <Route path='/saved-movies' element={

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
      } />   

      <Route path='*' element={
          
            <Main name='pageNotFound' />
          
        } />
            
      </Routes>        
    </div>

  )

}

export default App;
