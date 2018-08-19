import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ ProfileService ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor( public getProfile: ProfileService) {
   }

  ngOnInit() {
   this.user = this.getProfile.user;
} }
