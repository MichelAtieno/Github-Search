import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ ProfileService ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
   public profileSearch = 'MichelAtieno';
   public newUserName;
   // repo = [];

  getUserProfile(name) {
    this.newUserName = '';
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) === ' ' || name.charAt(i) === '?' || name.charAt(i) === '/') {
      alert(`Not valid Username` );
      this.newUserName = 'MichelAtieno';
      } else if (name.charAt(i) !== '' || name.charAt(i) !== '?' || name.charAt(i) !== '/' ) {
      this.newUserName = this.newUserName.concat(name.charAt(i));
      }
    }
    this.profileSearch = this.newUserName;
    this.ngOnInit();
  }

  constructor( public getProfileRequest: ProfileService, public getRepositoryRequest: ProfileService) {
   }

  ngOnInit() {
   this.getProfileRequest.getProfile(this.profileSearch);
   this.user = this.getProfileRequest.user;
   // this.getRepositoryRequest.getProfileRepo(this.profileSearch);
} }
