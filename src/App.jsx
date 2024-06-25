import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/main/Main';
import Pen from './components/Pen';


const App = () => {
  return (
    <div className='App'>
        <Pen/>
        <Header/>
        <Banner/>
        <Main/>
    </div>
  )
}

export default App