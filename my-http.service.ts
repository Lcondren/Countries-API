import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';




@Injectable({
  providedIn: 'root'
})
export class MyHttpService {


  constructor() { }

 


  
  options: HttpOptions = {
    url: 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,currencies,flags'
  }

 

  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options);
  }

  
  
  }
 
