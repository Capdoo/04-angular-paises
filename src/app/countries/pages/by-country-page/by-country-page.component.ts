import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  searchByName(event: string) {
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
