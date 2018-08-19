import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  getSearch = new Search('');

  @Output() searchName = new EventEmitter<Search>();

  searchFor(data) {
     this.searchName.emit(data.value.search);
     data.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
