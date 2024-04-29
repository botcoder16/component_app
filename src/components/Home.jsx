import { useEffect, useState } from 'react'
import React from 'react'
import Search from './Search'
import Weather from './Weather';

export default function Home() {
  const [search, setsearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=819679a36fc01f29aef2b9d9661d0b5a`);
      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }
  function handlesearch() {
    fetchWeatherData(search);
  }
  useEffect(() => {
    fetchWeatherData("Bengaluru");
  }, [])
  return (
    <>
      <Search search={search} setsearch={setsearch} handlesearch={handlesearch} />
      {
        loading ? (
          <div className='loading'>Loading...</div>
        ) : (<div>
          <Weather weatherData={weatherData} />
        </div>
        )
      }
    </>
  )
}
