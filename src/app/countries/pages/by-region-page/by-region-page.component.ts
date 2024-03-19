import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}


  searchByName(event: string) {
    console.log({event});
    this.countriesService.searchRegion(event).subscribe(
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
