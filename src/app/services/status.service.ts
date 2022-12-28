import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}

  // url = 'https://instagram47.p.rapidapi.com/user_posts';
  // params = new HttpParams().set('username', 'taneja.gaurav');
  // headerPart = new HttpHeaders()
  //   .set('X-RapidAPI-Key', '0ad39d22eemsh234329f2bffd585p1712e5jsn6770b4f591d3')
  //   .set('X-RapidAPI-Host', 'instagram47.p.rapidapi.com');

  // options = {
  //   params: this.params,
  //   headers: this.headerPart,
  // };

  url = 'https://instagram-scraper-2022.p.rapidapi.com/ig/posts_username/';
  params = new HttpParams().set('user', 'nasa');
  headerPart = new HttpHeaders()
    .set('X-RapidAPI-Key', 'bff3cdd2a4msh4cbe954d536a9f9p1b721fjsnd9d09c3bc69d')
    .set('X-RapidAPI-Host', 'instagram-scraper-2022.p.rapidapi.com');

  options = {
    params: this.params,
    headers: this.headerPart,
  };

  status() {
    return this.http.get(this.url, this.options);
    // return this.http.get(this.url, this.params, {headers: {this.headerPart}});
  }
}
