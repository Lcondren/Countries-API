import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {

  options: HttpOptions = {
    url: 'https://restcountries.com/v3.1/all'
  }

  
  countries: any = [];

  constructor(private mhs: MyHttpService, private router: Router, private mds: MyDataService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.getCountries();
  }


  async getCountries() {
   var result = await this.mhs.get(this.options)
   this.countries = result.data;    
  }

   async openCountryDetails(country: any){
    await this.mds.set("myCountry", country)
    this.router.navigate(['/country-details'])
    
  }

}
