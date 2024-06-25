import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private apiKey = 'JS5KDLLR9KSLKZXPMFDJD55MY'

  constructor() { }

  baseurl: string = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

  requestOptions!: {
    method: 'GET';
    redirect: 'follow';
  };

  async getWeatherDescription( lat: number, lon: number) {
    let endpoint = this.baseurl +'lat,lon?key='+ this.apiKey;
    return await fetch(endpoint, this.requestOptions)  
          .then(response => response.json())
            .then(result =>  result.description)
            .catch(error => {console.log('error',error); return ' Unable to retrieve weather details'});
  } 
}
