import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import TypesExample from './components/Button';
import './App.css'
import Navbar from './components/Navigationbar';
import MainContainer from './components/MainContainer';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';

function App() {
 
  return (
    <>
      <Navbar/>
      <HeaderComp/>
      <MainContainer/>
      <FooterComp/>
    </>
  )
}

export default App
