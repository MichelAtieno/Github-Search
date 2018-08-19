import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [ProfileService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository: Repository;
  public newUserName: string;
  public profileSearch: string;
  public resultCount = 8;

  searchRepository(name) {
    this.newUserName = '';
    for ( let i = 0; i < name.length; i++) {
      if (name.charAt(i) === '') {
        this.newUserName = this.newUserName.concat('+');
      } else if (name.charAt(i) !== '') {
        this.newUserName = this.newUserName.concat(name.charAt(i));
      }
    }
    this.resultCount = 8;
    this.getInformation();
  }

    Reload() {
    this.resultCount += 10;
    this.getInformation();
  }

  constructor( public getRepositoryRequest: ProfileService) { }

  ngOnInit() {
    this.resultCount = 1;
    this.getRepositoryRequest.getProfileRepo(this.newUserName);
  }
  getInformation() {
    this.getRepositoryRequest.getProfileRepo(this.newUserName);
  }


}
