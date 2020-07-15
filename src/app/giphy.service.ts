import { Injectable } from '@angular/core';
import { Giphy } from './giphy';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = 'Y6jNgQA2KmBev5ZMMr1RaNP7BhdpayJA';

  /**
   * Giphy API endpoints
   */
  giphyTrendingEndpointUrl;
  giphySearchEndpointUrl;


  constructor(private http: HttpClient) {
    this.giphyTrendingEndpointUrl = `https://api.giphy.com/v1/stickers/trending?api_key=${this.apiKey}&rating=g`;
    this.giphySearchEndpointUrl = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&rating=g`;
  }

  /** api.giphy.com/v1/stickers/trending */
  getGiphys(offset: number = 0, batchSize: number = 2): Observable<any> {
    return this.http.get(`${this.giphyTrendingEndpointUrl}&offset=${offset}&limit=${batchSize}`)
      .pipe(catchError(this.handleError<any>('getgiphys', [])));
  }

  /** api.giphy.com/v1/gifs/search */
  searchGiphys(query: string, offset: number = 0, batchSize: number = 2): Observable<any> {
    return this.http.get(`${this.giphySearchEndpointUrl}&offset=${offset}&limit=${batchSize}&q=${query}`)
      .pipe(catchError(this.handleError<any>('getgiphys', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  } 

}