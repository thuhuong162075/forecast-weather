import React from 'react';
import { Grid, Typography, GridList, GridListTile} from '@material-ui/core';
import '../assets/css/WeatherToday.css'
import * as Urls from '../constants/Config'

function WeatherToday(props) {
    const {weather} = props
    const data = []
    var date = new Date(weather.dt * 1000);
    var dateSunrise = new Date(weather.sys.sunrise * 1000);
    var dateSunset = new Date(weather.sys.sunset * 1000);
    data.push({
        value: Math.ceil(weather.main.temp_max)+"°",
        text: 'Hight'
    })
    data.push({
        value: Math.floor(weather.wind.speed) + 'mph',
        text: 'Wind'
    })
    data.push({
        value: dateSunrise.getHours()+ ':'+ dateSunrise.getMinutes(),
        text: 'Sunrise'
    })
    data.push({
        value: Math.floor(weather.main.temp_min)+"°",
        text: 'Low'
    })
    data.push({
        value: weather.main.humidity + '%',
        text: 'Rain'
    })
    data.push({
        value: dateSunset.getHours()+ ':'+ dateSunset.getMinutes(),
        text: 'Sunset'
    })
    
  return (
    <div className="Infomation">
        <div className="info-title" >
            <h1 className="city">{weather.name}, {weather.sys.country}</h1>
            <p className="time">{date.toUTCString().slice(0,16)}</p>
        </div>
        <div className="info-content">
            <div className="WeatherToday">
                <Grid container spacing={3}>
                    <Grid item sm={3} style={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <img src={`${Urls.IMAGE}${weather.weather[0].icon}${'@2x.png'}`} alt="weather" width={200} height={200}/>
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant="h5" component="h2" className="temperature">
                            {Math.floor(weather.main.temp)}°
                        </Typography>
                        <Typography component="p" className="tem-detail">
                            {weather.weather[0].main}
                        </Typography>
                    </Grid>
                    <Grid item sm={6} className="list-grid-tem-time">
                        <GridList cols={3} cellHeight={100}>
                            {data.map((title, index) => (
                                <GridListTile key={index} className="detail-list-grid-time">
                                    <Typography component="h4" className="list-tem time"> 
                                        {title.value}
                                    </Typography>
                                    <Typography className="list-tem text">
                                        {title.text}
                                    </Typography>
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
    
  );
}

export default WeatherToday;
