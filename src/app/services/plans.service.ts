import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

export interface Post {
  planId: string,
  planName: string,
  subscription: string,
  subscriptionStatus:string,
  subscriptionDuration:string
}

@Injectable()
export class PlansService {
  PLANS_DETAILS: any;

  constructor(private http: HttpClient) { }

  getUserData () {
    this.PLANS_DETAILS = this.http.get ('https://5eafc3b20605ed0016d2cd5b.mockapi.io/angular/demo/packdetails');
    const plansInfo = new Subject ();

    setTimeout (() => {
      plansInfo.next (this.PLANS_DETAILS);
      plansInfo.complete ();
    });

    return this.PLANS_DETAILS;
  }

}