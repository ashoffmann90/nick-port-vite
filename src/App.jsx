import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import AnotherFlight from './assets/fonts/Another Flight.ttf'
import Basicaline from './assets/fonts/BasicalineRegular.ttf'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Videos from './components/Videos'
import Contact from './components/Contact'
import BehindTheScenes from './components/BehindTheScenes'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: 'Another Flight';
  src: local('Another Flight'), local('AnotherFlight'), url('${AnotherFlight}') format('opentype');
}
@font-face{
  font-family: 'Basicaline';
    src: local('Basicaline'), local('BasicalineRegular'),
        url('${Basicaline}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face{
  font-family: 'Big Shoulders Text';
}
@font-face{
  font-family: 'Pompiere';
}
@font-face{
  font-family: 'Gruppo';
}

p, li{
  font-family: @header-font, 'Big Shoulders Text';
}

h1, h2{
  font-family: @header-font, 'Pompiere';
}

a{
  font-family: @text-font, 'Big Shoulders Text';
}
`

function App() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/videos' element={<Videos />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/bts' element={<BehindTheScenes />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    )
}

export default App
