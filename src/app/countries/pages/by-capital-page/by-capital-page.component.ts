import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByCapital(event: string) {
    this.isLoading = true;
    console.log({event});
    this.countriesService.searchCapital(event).subscribe(
      (data: Country[]) => {
        // console.log(data);
        this.countries = data;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
