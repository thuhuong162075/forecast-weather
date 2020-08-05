import React from 'react';
import '../../assets/css/Infomation.css'
import WeatherToday from '../../components/WeatherToday';
import Forecast from '../../components/Forecast';

function ResultWeather() {
  return (
    <div className="info-search">
      <div className="Infomation">
        <div className="info-title">
            <h1 className="city">Hà Nội</h1>
            <p className="time">Monday 3 August</p>
        </div>
        <div className="info-content">
            <WeatherToday />
            <Forecast />
        </div>
      </div>
    </div>
  );
}

export default ResultWeather;
