import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "";

  constructor(private countriesService: CountriesService) {}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByName(event: string) {
    this.isLoading = true;
    console.log({event});
    this.countriesService.searchName(event).subscribe(
      (data: Country[]) => {
        // console.log(data);
        this.countries = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
