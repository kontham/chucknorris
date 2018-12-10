import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb () {
    const categories = [
      {name: 'explicit'},
      {name: 'dev'},
      {name: 'movie'},
      {name: 'food'},
      {name: 'celebrity'},
      {name: 'science'},
      {name: 'sport'},
      {name: 'political'},
      {name: 'religion'},
      {name: 'animal'},
      {name: 'history'},
      {name: 'music'},
      {name: 'travel'},
      {name: 'career'},
      {name: 'money'},
      {name: 'fashion'}
    ];
    return(categories);
    }
  //   genId(categories: Category[]): number {
  //     return categories.length > 0 ? Math.max(...categories.map(category => category.name)) + 1 : 11;
  // }
}
