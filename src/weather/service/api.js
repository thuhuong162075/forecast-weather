
import callApi from './callApi';
import * as Urls from '../constants/Config'

const searchWeatherApi = async (nameCity) => {
    const response = await callApi(`${Urls.proxy}${Urls.API_URL}${'weather?q='}${nameCity}${Urls.APPID}`, 
    "GET", null)
    if(!response) return 1
    const result = await response.status === 200 ? response.data : 1
    return result
}
const searchForecastApi = async (nameCity) => {
    const response = await callApi(`${Urls.proxy}${Urls.API_URL}${'forecast?q='}${nameCity}${Urls.APPID}`, 
    "GET", null)
    const result = await response.status === 200 ? response.data : {}
    return result
}

export const api = {
    searchWeatherApi,
    searchForecastApi
  }