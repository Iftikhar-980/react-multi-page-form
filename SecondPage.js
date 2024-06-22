import React,{useState} from 'react'
import './page.css'

const SecondPage=({submit})=> {
  const [inputData,setInputData]=useState({zipCode:'',address:'',sex:'',language:''})
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setInputData({...inputData,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    submit(inputData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2><h3> (PAGE 2)</h3>
      <label>zip-Code:</label>
      <input type='number' name='zipCode' value={inputData.zipCode} onChange={handleChange} required/>
      <br/>
      <label>Address:</label>
      <input type='text' name='address' value={inputData.address} onChange={handleChange} required/>
      <br/>
      <label>Gender:</label>
      Male<input type='radio' className='radio' name='sex' value='Male' checked={inputData.sex==='Male'} onChange={handleChange} required/>
      Female<input type='radio' className='radio' name='sex' value='Female' checked={inputData.sex==='Female'} onChange={handleChange}/>
      <br/> 
      <label>language:</label>
      English<input type='radio' className='radio' name='language' value='english' checked={inputData.language==='english'} onChange={handleChange} required/>
      Non-English<input type='radio' className='radio' name='language' value='nonEnglish' checked={inputData.language==='nonEnglish'} onChange={handleChange}/>
      <br/>
      <button type='submit'>Next</button>
    </form>
  )
}

export default SecondPage