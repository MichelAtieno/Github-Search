import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName$;

  constructor( private http: HttpClient) { }

  ngOnInit() {
   // this.http.get('https://api.github.com/users/MichelAtieno?access_token= 58b6bc80382e7bff719ab38e773fbddca03899b0 ' + apiKey')
  }

}
