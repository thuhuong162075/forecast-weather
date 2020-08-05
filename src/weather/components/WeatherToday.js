import React from 'react';
import { Grid, Typography, GridList, GridListTile} from '@material-ui/core';
import '../assets/css/WeatherToday.css'
import CloudIcon from '@material-ui/icons/Cloud';

function WeatherToday() {
    const tileData = [
        {
            value: "28°",
            text: 'Hight'
        },
        {
            value: '2.6mph',
            text: "Wind"
        },
        {
            value: '5:32:',
            text: "Sunrise"
        },
        {
            value: '28°',
            text: 'Low'
        },
        {
            value: '83%',
            text: 'Rain'
        },
        {
            value: '6:33:',
            text: 'Sunset'
        }
    ]
   
  return (
    <div className="WeatherToday">
        <Grid container spacing={3}>
            <Grid item sm={3} style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <CloudIcon style={{ color: 'rgb(255, 255, 255)', fontSize: '150px' }} />
            </Grid>
            <Grid item sm={3}>
                <Typography variant="h5" component="h2" className="temperature">
                    28°
                </Typography>
                <Typography component="p" className="tem-detail">
                    Moderate rain
                </Typography>
            </Grid>
            <Grid item sm={6} className="list-grid-tem-time">
                <GridList cols={3} cellHeight={100}>
                    {tileData.map((title, index) => (
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
  );
}

export default WeatherToday;
