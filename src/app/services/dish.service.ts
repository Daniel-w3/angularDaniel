import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor(private http: HttpClient) { }

  // getDishes(): Dish[] {
    // return DISHES;
  // }
  // 
  // getDish(id: number): Dish {
    // return DISHES.filter((dish) => (dish.id === id))[0];
  // }

  getDishes(): Observable<Dish[]> {
    // return observableOf(DISHES).pipe(delay(2000));
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }
  getDish(id: number): Observable<Dish> {
    // return observableOf(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }
  
}
