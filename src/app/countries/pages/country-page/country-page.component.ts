import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  id: string = "";
  public country?: Country;
  constructor( private activatedRouted: ActivatedRoute, private countriesService: CountriesService, private router: Router){}

  ngOnInit(): void {
    this.activatedRouted.params
    .pipe(
      switchMap( ({myId}) => this.countriesService.searchCountryByAlphaCode(myId))
    )
    .subscribe(
      (data) => {
        console.log(data);
        if (!data) {
          return this.router.navigateByUrl('');
        }
        console.log('Tenemos un pais!')
        this.country = data;
        return;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // searchCountry(code: string) {
  //   this.countriesService.searchCountryByAlphaCode(code).subscribe(
  //     (data) => {
  //       console.log(data);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  // }

}
