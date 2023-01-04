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
    .set('X-RapidAPI-Key', '0ad39d22eemsh234329f2bffd585p1712e5jsn6770b4f591d3')
    .set('X-RapidAPI-Host', 'instagram-scraper-2022.p.rapidapi.com');

  feedoptions = {
    params: this.feedparams,
    headers: this.feedheaderPart,
  };

  status() {
    return this.http.get(this.feedUrl, this.feedoptions);
    // return this.http.get(this.url, this.params, {headers: {this.headerPart}});
  }

  userUrl = 'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/';
  userparams = new HttpParams().set('user', 'nasa');
  userheaderPart = new HttpHeaders()
    .set('X-RapidAPI-Key', '0ad39d22eemsh234329f2bffd585p1712e5jsn6770b4f591d3')
    .set('X-RapidAPI-Host', 'instagram-scraper-2022.p.rapidapi.com');

  useroptions = {
    params: this.userparams,
    headers: this.userheaderPart,
  };

  userInfo() {
    return this.http.get(this.userUrl, this.useroptions);
    // return this.http.get(this.url, this.params, {headers: {this.headerPart}});
  }
}