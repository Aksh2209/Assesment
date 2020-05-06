import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Post {
  planId: string,
  planName: string,
  subscription: string,
  subscriptionStatus:string,
  subscriptionDuration:string
}

@Injectable()
export class PlansService {

  constructor(private http: HttpClient) { }
  
  fetchPlans(): Observable<Object> {
    return this.http.get('https://5eafc3b20605ed0016d2cd5b.mockapi.io/angular/demo/packdetails');
  }
}
