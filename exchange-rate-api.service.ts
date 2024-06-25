import { Injectable } from '@angular/core';
import { HttpOptions, CapacitorHttp } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRateApiService {

  //Personal Key
  API_KEY = '6d05839d49b8a8778d948f2f'

  constructor()  { }

    
  fxRate: HttpOptions = {
    url: 'https://v6.exchangerate-api.com/v6/6d05839d49b8a8778d948f2f/pair/BGN/EUR'
  }

  
  async get(fxRate: HttpOptions) {
    return await CapacitorHttp.get(fxRate)
  }

    //baseurl: string =  'https://v6.exchangerate-api.com/v6/'

  //Write to get a response from the API 
  //requestOptions!: {
    //method: 'GET';
    //redirect: 'follow';
  };
  
  //Write method to get currency converter of country currency to exchange to the target currency (Euro)
  //async getCurrencyConverter( base: string, target: string) {
    //var  cur = this.baseurl + this.API_KEY + '/pair/'+ base + '/EUR';
    //return await fetch(cur, this.requestOptions)  
      //    .then(response => response.json())
        //    .then(result =>  result.conversion_rate)
          //  .catch(error => {console.log('error',error); return ' Unable to retrieve currency details'});
  //} 

//}