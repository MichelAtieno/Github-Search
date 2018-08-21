import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { reject } from 'q';
import { resolve } from 'url';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: User;
  repository: Repository;
  otherRepo: any;
  // searchRepository: any;
  // getUserRepo: any;
  private userName: string;

  constructor( private http: HttpClient) {
    this.user = new User ('', '', '', '', 0 , new Date(), 0, 0);
    this.repository = new Repository ('', '', '' );
    this.userName = 'MichelAtieno';
   }

   getProfile() {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      html_url: string;
      public_repos: number;
      created_at: Date;
      followers: number;
      following: number;
    }

    const promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>('https://api.github.com/users/MichelAtieno?access_token=' + environment.accesstoken ).toPromise().then(getUserInfo => {
        this.user.name = getUserInfo.name;
        this.user.login = getUserInfo.login;
        this.user.avatar_url  = getUserInfo.avatar_url;
        this.user.html_url = getUserInfo.html_url;
        this.user.public_repos = getUserInfo.public_repos;
        this.user.created_at = getUserInfo.created_at;
        this.user.followers = getUserInfo.followers;
        this.user.following = getUserInfo.following;
        resolve();
      }, error => {
        console.log(' Failed.');
        reject(error);
      });
    });
    return promise;
  }

   getProfileRepo(searchProfile) {
     interface ApiResponse {
       name: string;
       html_url: string;
       description: string;
     }
     // tslint:disable-next-line:max-line-length
     const myPromise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>('https://api.github.com/users/MichelAtieno/repos?access_token=' + environment.accesstoken ).toPromise().then(getUserRepo => {
        this.otherRepo = getUserRepo;
        console.log(this.otherRepo);
        resolve();
      }, error => {
       console.log('Failed');
       reject(error);
     });
   });
   reject(Error);
}
    updateProfile(userName: string) {
      this.userName = userName;
    }
}
/* getRepository(searchProfile, toShow) {
  interface ApiResponse {
    items: any;
}
const promise = new Promise((resolve, reject) => {
  // tslint:disable-next-line:max-line-length
  this.http.get<ApiResponse>('https://api.github.com/users/repos?access_token=' + environment.accesstoken ).toPromise().then(getUserRepo => {
    this.searchRepository = getUserRepo.items;
    // console.log(getRepoResponse.items)
    resolve();
  }, error => {
    this.searchRepository = 'Type to make a search request';
    console.log('Loading Failed');
    reject(error);
  });
});
return promise;
*/
