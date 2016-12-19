import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Drikke } from '../models/drikke';
import { Rating } from '../models/rating';
/*
  Generated class for the Julejsonapi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Julejsonapi {

  apiUrl = "http://localhost:61910/api";
  constructor(public http: Http) {
    console.log('Hello Julejsonapi Provider');
  }

  // Load all drikke
  load(): Observable<Drikke[]> {
    return this.http.get(`${this.apiUrl}/drikke`)
      .map(res => <Drikke[]>res.json());
      
  }

  loadAllRatings(): Observable<Rating[]> {
    return this.http.get(`${this.apiUrl}/rating`)
      .map(res => <Rating[]>res.json());
  }

  saveRating(rating): Observable<Rating> {
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    let bodyString = JSON.stringify(rating);
    console.log("Was here" + bodyString);
    return this.http.post(`${this.apiUrl}/rating`, bodyString, {headers: headers}).map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // // Load all drikke
  // loadRatedForUser(id): Observable<RatedDrikke[]> {
  //   return this.http.get('${this.apiUrl}/user/rating/drikke/' + id )
  //     .map(res => <RatedDrikke[]>res.json());
      
  // }
}
