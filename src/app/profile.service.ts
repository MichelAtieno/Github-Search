import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: User;

  constructor( private http: HttpClient) {
    this.user = new User ('', '', '', '', 0 , false, new Date(), 0, 0);
   }

}
