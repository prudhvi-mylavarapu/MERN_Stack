import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'


function App() {
  const [weatherData, setWeatherData] = useState(false)

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

      const response = await fetch(url);
      const data = await response.json();

      console.log(data)

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: Math.floor(data.wind.speed * 10) / 10,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon,
        feelsLike: Math.floor(data.main.feels_like),
        description: data.weather[0].description,
        temp_max: Math.floor(data.main.temp_max),
        temp_min: Math.floor(data.main.temp_min)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    search("lansing")
  }, [])

  return (
    <>
      <div className="bg-linear-to-br from-blue-700 to-orange-400 min-h-screen w-screen flex justify-center items-center p-4 sm:p-6 md:p-8">
        <div className="bg-linear-to-br from-gray-800 to-blue-900 rounded-2xl sm:rounded-3xl shadow-xl p-10 w-full sm:w-5/6 md:w-2/3 lg:w-1/2 h-auto sm:h-auto md:h-5/6 lg:h-10/12 max-w-5xl">
          <Navbar onSearch={search} />
          <Content weatherData={weatherData} />
        </div>
      </div>
    </>
  )
}

export default App
