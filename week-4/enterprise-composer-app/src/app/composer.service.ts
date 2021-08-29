import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Philip Glass", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Wolfgang Mozart", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 103, fullName: "George Benjamin", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Nico Muhly", genre: "Classical"
      },
    ]
  }
  //Return composers from list
  getComposers(): Observable<IComposer[]> {
    return of (this.composers);
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
  //Using pipe to chain functions & return array of objects.
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name)>-1)))
  }
}


