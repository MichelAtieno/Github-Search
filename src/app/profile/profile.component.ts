import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../profile.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any[];

  constructor( private http: Http) {
    http.get('https://api.github.com/users/MichelAtieno?access_token=58b6bc80382e7bff719ab38e773fbddca03899b0').subscribe(response => {
      console.log(response.json());
    });
  //  this.profileService.getUserInfo().subscribe(information => {
    //  console.log(information);
  //  });
   }

  ngOnInit() {
  }

}
