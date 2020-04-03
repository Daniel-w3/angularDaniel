import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';

import { Observable } from 'rxjs';
// import { delay } from 'rxjs/operators';
// import { of as observableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(baseURL + 'feedback');
  }

}
