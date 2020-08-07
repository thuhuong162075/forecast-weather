import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadingSearchWeather, dataSearchWeather } from './reselect'
import { searchWeather } from './action';
import { Spinner } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import WeatherToday from '../../components/WeatherToday';
import Forecast from '../result/index'
import '../../assets/css/Weather.css'

import {searchForecast} from '../result/action'
import {loadingSearchForecast, dataSearchForecast} from '../result/reselect'


export default function FormInput() {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("")
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const {loading, dataWeather} = useSelector(createStructuredSelector({
    loading: loadingSearchWeather,
    dataWeather: dataSearchWeather
  }));
  const {load, dataForecast} = useSelector(createStructuredSelector({
      load: loadingSearchForecast,
      dataForecast: dataSearchForecast
  }));

  const changeInput = (event) => {
    let key = event.target.value;
    setKeyword(key)
  }
  const onSearch = (e) => {
    e.preventDefault();
    setShow(true)
    dispatch(searchWeather(keyword)); 
    dispatch(searchForecast(keyword)); 
  }
  return (
    <div className="Weather">
      <h1 className="title header" style={{opacity: show ? '1' : '0'}}>Weather app</h1>
      <div className="weather-content">
          <h1 className="title wt-content" style={{opacity: show ? '0' : '1'}}>Weather app</h1>
          <div className="input-form" style={{top: show ? '0' : '20%'}}>
            <Paper component="form" className={classes.root}>
              <IconButton 
                type="submit" 
                className={classes.iconButton} 
                aria-label="search"
                onClick={onSearch}
              >
                <SearchIcon/>
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Nhập tên thành phố"
                inputProps={{ 'aria-label': 'Nhập tên thành phố' }}
                onChange={changeInput}
              />
            </Paper>
          </div>
         
          
          {show ? 
            (loading ? (
              <div className="loading">
                <Spinner className="my-3" animation="border" />
              </div>
              ) : (
                Object.keys(dataWeather).length>0 ? (
                  <div className="info-search">
                    <WeatherToday weather={dataWeather}/>
                    {load ? (
                      <Spinner className="my-3" animation="border" />
                    ) : (
                      <Forecast forecast={dataForecast.list}/>
                    )
                  }
                  </div>
                  ) : (
                    <div className="notfound">Not found data</div>
                  )
                )
          ) : (
            <div></div>
          )}
      </div>
    </div>
    
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '500px',
    margin: '0 auto',
    borderRadius: '30px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));