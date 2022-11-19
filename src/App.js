import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LastInfoSection from './components/LastInfoSection';
import CompareSection from './components/CompareSection';

function App() {
const [email,setEmail]=useState('')


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(email)
}

  return (
    <BrowserRouter>
        <Header/>
          <Routes>
             <Route path="/" element={<HomePage/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
