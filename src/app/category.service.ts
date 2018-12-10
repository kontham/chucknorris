import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { CATEGORIES } from './mock-categories';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  readonly baseUrl = 'https://chucknorris.io/jokes/categories';

  getCategories(): Observable<Category[]> {
    // return of(CATEGORIES);
    return this.http.get<Category[]>(this.baseUrl);
       // .pipe(
       //   catchError(this.handleError('getCategories', []))
       // );
  }

  // getCategory(id: number): Observable<Category> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<Category>(url)
  //     .pipe(
  //       catchError(this.handleError<Category>(`getCategory id=${id}`))
  //     );
  //  // return of(CATEGORIES.find(category => category.name === name));
  // }

   // private handleError<T> (operation = 'operation', result?: T) {
   //   return (error: any): Observable<T> => {
   //     console.error(error);
   //     return of(result as T);
   //   };
   // }
}
