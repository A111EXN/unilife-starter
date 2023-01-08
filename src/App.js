import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import StudentAccomodation from './pages/StudentAccomodation'
import SearchAccomodation from './pages/SearchAccomodation';
import HomeDetailPage from './pages/HomeDetailPage';
import LastInfoSection from './components/LastInfoSection';
import CompareSection from './components/CompareSection';
import Banner from './components/Banner';

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
             <Route path="/StudentAccomodation" element={<StudentAccomodation/>}/>
             <Route path="/SearchAccomodation/:cityId" element={<SearchAccomodation/>}/>
             <Route path='/HomeDetailPage/:propertyId' element={<HomeDetailPage/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
