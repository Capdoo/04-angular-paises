import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  countries: Country[] = [];
  isError: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByCapital(event: string) {
    console.log({event});
    this.countriesService.searchCapital(event).subscribe(
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
