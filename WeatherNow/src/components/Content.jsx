import React from 'react'
import forecastImage from '../images/Gemini_Generated_Image_5lc3d85lc3d85lc3.png'

const Content = ({ weatherData }) => {

  // derived icon URL — will update whenever `weatherData.icon` changes
  const iconPng = weatherData ? `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png` : null;

  return (
    <div className='w-full sm:w-full md:w-11/12 lg:w-5/6 xl:w-3/4 mx-auto px-4 text-white/80 italic'>
      <div className='rounded-2xl p-4 sm:p-5 md:p-6 bg-linear-to-r from-sky-500 to-sky-800 shadow-2xl'>
        <div className='flex flex-col gap-3 sm:gap-4'>
          <div className='flex flex-col items-center gap-4 sm:gap-6'>
            <div className='font-bold text-3xl sm:text-4xl md:text-5xl text-center'>{weatherData.location}</div>
            <div className='flex items-center justify-center'>
              {iconPng ? (
                <img src={iconPng} alt="weather icon" width="92" height="92" className='w-20 h-20 sm:w-24 sm:h-24' />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 sm:w-24 sm:h-24' fill="#FFFFFFCC" viewBox="0 0 256 256"><path d="M164,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L121.22,54A55.9,55.9,0,0,0,96,48c-.58,0-1.16,0-1.74,0L91.37,31.71a8,8,0,1,0-15.75,2.77L78.5,50.82A56.1,56.1,0,0,0,55.23,65.67L41.61,56.14a8,8,0,1,0-9.17,13.11L46,78.77A55.55,55.55,0,0,0,40,104c0,.57,0,1.15,0,1.72L23.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,84,224h80a76,76,0,0,0,0-152ZM56,104a40,40,0,0,1,72.54-23.24,76.26,76.26,0,0,0-35.62,40,52.14,52.14,0,0,0-31,4.17A40,40,0,0,1,56,104ZM164,208H84a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,164,208Z"></path></svg>
              )}
            </div>
            <div className='flex flex-col items-center'>
              <div className='font-bold text-4xl sm:text-5xl md:text-6xl'>{weatherData.temperature}°C</div>
              <div className='text-xl sm:text-2xl text-center'>{weatherData.description}</div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-around font-bold gap-2 sm:gap-0 text-sm sm:text-base'>
            <p>Feel like: {weatherData.feelsLike}°C</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind Speed: {weatherData.windSpeed}m/s</p>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-around font-bold gap-2 sm:gap-0 text-sm sm:text-base'>
            <p>Temp_Max: {weatherData.temp_max}°C</p>
            <p>Temp_Min: {weatherData.temp_min}°C</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
