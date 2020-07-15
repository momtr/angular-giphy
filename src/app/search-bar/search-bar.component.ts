import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchQuery: string;
  defaultBatchSize: number;
  noInputMillis: number;
  minDelayMillis: number;
  @Input() callback: Function;

  constructor() {
    this.searchQuery = '';
    this.noInputMillis = Date.now();
    this.minDelayMillis = 300;
  }

  ngOnInit() {
    if(!this.callback)
      throw new Error('no callback specified in the template of the parent component');
  }

  /** called on input */
  search(searchQuery: string) {
    if(this.searchQuery  && (Date.now() - this.noInputMillis) >= this.minDelayMillis) {
      console.log('call', Date.now() - this.noInputMillis)
      this.callback(this.searchQuery);
      this.resetNoInputMillis();
    } 
  }

  /** resets noInputMillis */
  resetNoInputMillis(): void {
    this.noInputMillis = Date.now();
  }

}
