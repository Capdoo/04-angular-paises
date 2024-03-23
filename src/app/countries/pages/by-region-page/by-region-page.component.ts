import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }


  searchByRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;

    console.log({event});
    this.countriesService.searchRegion(region).subscribe(
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
