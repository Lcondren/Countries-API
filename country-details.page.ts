import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyDataService } from '../services/my-data.service';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { CountryListInterface, CountryDetailInterface } from '../interfaces/interface';
import { Router } from '@angular/router';
import { WeatherApiService } from '../services/weather-api.service';
import { ExchangeRateApiService } from '../services/exchange-rate-api.service';









@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CountryDetailsPage implements OnInit {

  
  apikey: string = "JS5KDLLR9KSLKZXPMFDJD55MY";

  weather: HttpOptions = {
    url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
  }

  API_KEY = '6d05839d49b8a8778d948f2f'

  fxRate: HttpOptions = {
    url: 'https://v6.exchangerate-api.com/v6/'
  }

  buttonDisabled!: boolean;
  public countryName = "";

 
  countryData: CountryListInterface[] = [];
  country!: CountryDetailInterface[];
  countryFlags!: any;
  countryCapital!: any;
  countryPopulation!: any;
  countryCurrency: string[] = [];
  countryLanguages: any;
  languages: any =[];
  caplat: any;
  caplon: any;
  weatherData: any;
  currencyConverter: any;
  
  countryWeather!: any;



 

  constructor(private mds: MyDataService, private mhs: MyHttpService, private router: Router, private wps: WeatherApiService, private ers: ExchangeRateApiService) { }

  ngOnInit() {

  }

 ionViewWillEnter() {
  this.getCountryDetails();
  this.mds.get("myCountry")
 // this.getCountryWeather();
  this.mds.get("weather")
  
  
 }

 async getCountryDetails(){
  var result = await this.mds.get("myCountry")
  this.countryData = result.name.official;
  this.countryFlags = result.flags.png;
  this.countryCapital = result.capital;
  this.countryPopulation = result.population;
  this.countryWeather = await this.getCountryWeather(result.latlng[0], result.latlng[1])
  this.languages = Object.values(result.languages);
  for(const currencies in result.currencies){
  this.countryCurrency.push(currencies)
  }
  //for (const lang in result.languages) {
  //this.countryLanguages.push(lang)
  //}
  
 }

 async getCountryWeather(lat:number, lon: number) {
  return await this.wps.getWeatherDescription(lat, lon);
 } 

 

 


}