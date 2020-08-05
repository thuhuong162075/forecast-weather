import React from 'react';
import './assets/css/Weather.css'
import Search from './pages/search/index'

function Weather() {
  return (
    <div className="Weather">
        <h1 className="title header">Weather app</h1>
        <div className="weather-content">
            <h1 className="title wt-content">Weather app</h1>
            <div className="input-form">
              <Search />
            </div>
        </div>
    </div> 
  );
}

export default Weather;
