import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}
  feedUrl = 'https://instagram-scraper-2022.p.rapidapi.com/ig/posts_username/';
  feedparams = new HttpParams().set('user', 'nasa');
  feedheaderPart = new HttpHeaders()
    .set('X-RapidAPI-Key', '596e9dbb6amshb87bba3bd2fd644p1cf885jsnd5d9cf6a91bb')
    .set('X-RapidAPI-Host', 'instagram-scraper-2022.p.rapidapi.com');

  feedoptions = {
    params: this.feedparams,
    headers: this.feedheaderPart,
  };

  feedFrmApi() {
    console.log('object');
    return this.http.get(this.feedUrl, this.feedoptions);
    // return this.http.get(this.url, this.params, {headers: {this.headerPart}});
  }

  userUrl = 'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/';
  userparams = new HttpParams().set('user', 'nasa');
  userheaderPart = new HttpHeaders()
    .set('X-RapidAPI-Key', '596e9dbb6amshb87bba3bd2fd644p1cf885jsnd5d9cf6a91bb')
    .set('X-RapidAPI-Host', 'instagram-scraper-2022.p.rapidapi.com');

  useroptions = {
    params: this.userparams,
    headers: this.userheaderPart,
  };

  userInfo() {
    console.log('userInfo ');
    return this.http.get(this.userUrl, this.useroptions);
    // return this.http.get(this.url, this.params, {headers: {this.headerPart}});
  }
}
