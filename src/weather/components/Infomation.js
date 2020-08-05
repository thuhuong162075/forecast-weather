import React from 'react';
import '../assets/css/Infomation.css'
import WeatherToday from './WeatherToday';
import Forecast from './Forecast';

function Infomation() {
  return (
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
  );
}

export default Infomation;
