import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "";

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

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
