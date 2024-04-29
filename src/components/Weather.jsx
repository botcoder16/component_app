import React from 'react'

export default function Weather({weatherData}) {
    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }
    return (<>
        <div className='city-name'>
            <h2>
                {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
        </div>
        <div>
            <span className='date'>{getCurrentDate()}</span>
        </div>
        <div className='temparature'>
            {weatherData?.main?.temp}
        </div>
        <div className="description-main">
            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].main : ""}
        </div>
        <div className="description-body">
            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ""}
        </div>
        <div className="weather-info">
            <div className='column'>
                <p className="wind">Wind Speed: {weatherData?.wind?.speed}</p>
            </div>
            <div className='column'>
                <p className="humidity">Humidity: {weatherData?.main?.humidity}</p>
            </div>
        </div>
    </>
    )
}
