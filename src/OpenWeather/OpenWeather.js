import React, { useState } from 'react'

function OpenWeather() {
  // https://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value}&appid=${apiKey}&units=metric
  const [data,setData] = useState('')
  const apiKey = "a20040kdfbmsbfkhsbfjsfnbdflkjafd41e1"

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value}&appid=${apiKey}&units=metric`)
    .then(res=>res.json()).then(data=>{
      console.log(data)
      setData(data)
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='city' placeholder='City' />
        <button>Get</button> 
      </form>
      {
        data?
        <div>
          <h1>temp: {data.main.temp}</h1>
          <h1>name: {data.weather[0].description}</h1>
          <h1>humidity: {data.main.humidity}</h1>
        </div>:''
      }
    </div>
  )
}

export default OpenWeather