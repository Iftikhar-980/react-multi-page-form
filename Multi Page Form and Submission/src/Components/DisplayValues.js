import React from 'react'
import './page.css'

const DisplayValues=({data})=> {
  return (
    <div className='formSubmit'>
      <h2>Form Values</h2>
      {data.map((entry, index) => (
        <div key={index} className="entry">
          <ul>
            {Object.keys(entry).map((key, idx) => (
              <li key={idx}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {entry[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button>Submit</button>
    </div>

  )
}

export default DisplayValues