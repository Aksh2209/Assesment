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
  postsUrl: string = 'https://5eafc3b20605ed0016d2cd5b.mockapi.io/angular/demo/packdetails';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
