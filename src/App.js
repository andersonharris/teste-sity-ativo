import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionApp from './components/SectionApp'
import SectionSecurity from './components/SectionSecurity'
import SectionFunctional from './components/SectionFunctional'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import CopyRight from './components/CopyRight'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <SectionApp></SectionApp>
        <SectionFunctional></SectionFunctional>
        <SectionSecurity></SectionSecurity>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
        <CopyRight></CopyRight>
        
    </div>
    
  )
}

export default App;
