import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user';
import { resolve } from 'url';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: User;

  constructor( private http: HttpClient) {
    this.user = new User ('', '', '', '', 0 , false, new Date(), 0, 0);
   }

   getProfile() {
    interface ApiResponse {
      name: string;
      avatar_url: string;
    }

    let promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>('https://api.github.com/users/MichelAtieno?access_token=58b6bc80382e7bff719ab38e773fbddca03899b0').toPromise().then(getUserInfo => {
        this.user.name = getUserInfo.name;
        this.user.avatar_url  = getUserInfo.avatar_url;
        resolve();
      }, error => {
        console.log(' Failed.');
        this.user.name = 'Error';
        this.user.avatar_url = '';
      });
    });
    return promise;
  }
}
