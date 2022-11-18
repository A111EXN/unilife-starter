import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body';


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
             <Route path="/" element={<Body/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
