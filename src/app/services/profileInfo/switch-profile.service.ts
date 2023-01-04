import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchProfileService {
  constructor(private http: HttpClient) {}
  /**
   * suggestions profile
   */
  switchProfileUrl =
    'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/';
  switchProfilefParam = new HttpParams().set('user', 'nasa');
  switchProfilefHeader = new HttpHeaders()
    .set('X-RapidAPI-Key', '0ad39d22eemsh234329f2bffd585p1712e5jsn6770b4f591d3')
    .set('X-RapidAPI-Host', 'instagram-scraper-2022.p.rapidapi.com');
  switchProfilefParamOptions = {
    params: this.switchProfilefParam,
    header: this.switchProfilefHeader,
  };

  suggestedProfile() {
    return this.http.get(
      this.switchProfileUrl,
      this.switchProfilefParamOptions
    );
  }
}
