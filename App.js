import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import DisplayValues from './Components/DisplayValues';

function App() {

  const [currentPage,setCurrentPage]=useState(1);
  const [formData,setFormData]=useState([]);

  const handleNext=(data)=>{
    setFormData([...formData,data])
    setCurrentPage(currentPage+1);
  }

  return (
    <div className="App">
      {currentPage===1 && <FirstPage onNext={handleNext}/>}
      {currentPage===2 && <SecondPage submit={handleNext}/>}
      {currentPage===3 && <DisplayValues data={formData}/>}
    </div>
  );
}

export default App;
