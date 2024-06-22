import React,{useState} from 'react'
import './page.css'

const FirstPage=({onNext})=> {
  const  [inputData,setInputData]=useState({id:'',password:'',name:'',email:'',city:''})

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setInputData({...inputData,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    onNext(inputData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2><h3> (PAGE 1)</h3>
      <label>User ID:</label>
      <input type='text' name='id' value={inputData.id} onChange={handleChange} required/>
      <br/>
      <label>Password:</label>
      <input type='text' name='password' value={inputData.password} onChange={handleChange} required/>
      <br/>
      <label>Name:</label>
      <input type='text' name='name' value={inputData.name} onChange={handleChange} required/>
      <br/>
      <label>Email:</label>
      <input type='email' name='email' value={inputData.email} onChange={handleChange} required/>
      <br/>
      <label>City:</label>
      <select name='city' value={inputData.city} onChange={handleChange} required>
        <option>Please Select City</option>
        <option value='Islamabad'>Islamabad</option>
        <option value='Rawalpindi'>Rawalpindi</option>
        <option value='Karachi'>Karachi</option>
        <option value='Lahore'>Lahore</option>
        <option value='Faisalabad'>Faisalabad</option>
      </select>
      <br/>
      <button type='submit'>Next</button>
    </form>
  )
}

export default FirstPage