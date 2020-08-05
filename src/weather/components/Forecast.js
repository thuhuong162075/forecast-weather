import React from 'react';
import '../assets/css/Forecast.css'

function Forecast() {
    const forecastData = [
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
        {
            time: {
                start: '08.05',
                end: '6:00'
            },
            img: 'https://openweathermap.org/img/w/10d.png',
            tem: '28°'
        },
    ]
  return (
    <div className="Forecast">
        <h2 className="fore-title">Forecast</h2>
        <div className="fore-content">
            <ul className="fore-group-list">
                {forecastData.map((item, index) => (
                    <li className="fore-group-list-item" key={index}>
                        <p className="fgli time start">{item.time.start}</p>
                        <p className="fgli time start">{item.time.end}</p>
                        <img src={item.img} alt="fore-group-item" width={60} height={60} className="fore-img"/>
                        <p className="fgli fore-tem">{item.tem}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Forecast;
