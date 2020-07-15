import { Component, OnInit } from '@angular/core';
import { Giphy } from '../giphy';
import { GiphyService } from '../giphy.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-giphys',
  templateUrl: './giphys.component.html',
  styleUrls: ['./giphys.component.css']
})
export class GiphysComponent implements OnInit {

  giphys: Giphy[];
  numOfGiphys: number;
  finished: boolean;
  defaultBatchSize: number;
  searchCallback: Function;

  constructor(private giphyService: GiphyService) {
    this.giphys = [];
    this.numOfGiphys = 0;
    this.finished = false;
    this.defaultBatchSize = 10;
    this.searchCallback = this.search.bind(this);
  }

  ngOnInit(): void {
    this.getGiphys();
  }

  /** called when the user has scrolled down to the bottom of the page */
  onScroll(): void {
    this.getGiphys();
  }

  /** clears the giphy array and sets the offset (numOfGiphys) to zero */
  emptyGiphys(): void {
    this.giphys = [];
    this.numOfGiphys = 0;
  }

  /** uses the Giphy service for searching and populates the giphy array */
  search(searchQuery: string): void {
    this.emptyGiphys(); 
    this.giphyService.searchGiphys(searchQuery, this.numOfGiphys, this.defaultBatchSize).subscribe(giphys => this.populateGiphys(giphys.data));
  }

  /** uses the Giphy service for trending stickers and populates the giphy array */
  getGiphys(): void {
    this.giphyService.getGiphys(this.numOfGiphys, this.defaultBatchSize).subscribe(giphys => this.populateGiphys(giphys.data));
  }

  /** adds the giphys of the parameter array to the giphys array */
  populateGiphys(arr: any): void {
    arr.forEach(element => {
      this.giphys.push({
        url: element.images.downsized_large.url,
        id: element.id
      })
    });
    this.numOfGiphys += arr.length;
  }

}