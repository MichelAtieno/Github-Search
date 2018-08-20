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
  searchRepository: any;
  getUserRepo: any;

  constructor( private http: HttpClient) {
    this.user = new User ('', '', '', '', 0 , false, new Date(), 0, 0);
    this.repository = new Repository ('', '', new Date(), '' );
   }

   getProfile(searchProfile) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      html_url: string;
      public_repos: number;
      hireable: boolean;
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
        this.user.hireable = getUserInfo.hireable;
        this.user.created_at = getUserInfo.created_at;
        this.user.followers = getUserInfo.followers;
        this.user.following = getUserInfo.following;
        resolve();
      }, error => {
        console.log(' Failed.');
        this.user.name = 'Error';
        this.user.login = 'Error';
        this.user.avatar_url = '';
        this.user.html_url = 'https://github.com';
        this.user.public_repos = 0;
        this.user.hireable = false;
        this.user.created_at = new Date(0, 0, 0 );
        this.user.followers = 0;
        this.user.following = 0;
        reject(error);
      });
    });
    return promise;
  }

   getProfileRepo(searchProfile) {
     interface ApiResponse {
       name: string;
       html_url: string;
       created_at: Date;
       description: string;
     }
     // tslint:disable-next-line:max-line-length
     const myPromise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>('https://api.github.com/users/repos?access_token=' + environment.accesstoken ).toPromise().then(getUserRepo => {
        this.otherRepo = this.getUserRepo;
        resolve();
      }, error => {
       console.log('Failed');
       this.otherRepo.name = 'Error';
       this.otherRepo.html_url = 'https://github.com/';
       this.otherRepo.created_at = new Date(Date.now());
       this.otherRepo.description = '';
       reject(error);
     });
   });
   reject(Error);
}
 getRepository(searchProfile, toShow) {
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

 } }
