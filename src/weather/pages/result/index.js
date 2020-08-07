import React from 'react';
import '../../assets/css/Forecast.css'
import * as Urls from '../../constants/Config'

function processDate(s) {
    let res = s.split(" ")
    let dateArr = res[0].split("-")
    let date = dateArr[1] +":" + dateArr[2];
    let time = res[1].slice(0,5)
    return {date, time}
}
function Forecast(props) {
    const {forecast} = props
  return (
    <div className="Forecast">
        <h2 className="fore-title">Forecast</h2>
        <div className="fore-content">
            <ul className="fore-group-list">
                {forecast.map((item, index) => (
                    <li className="fore-group-list-item" key={index}>
                        <p className="fgli time start">{processDate(item.dt_txt).date}</p>
                        <p className="fgli time start">{processDate(item.dt_txt).time}</p>
                        <img src={`${Urls.IMAGE}${item.weather[0].icon}${'@2x.png'}`} alt="fore-group-item" width={60} height={60} className="fore-img"/>
                        <p className="fgli fore-tem">{Math.floor(item.main.temp)}°</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Forecast;
