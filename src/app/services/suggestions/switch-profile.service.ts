import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SwitchProfileService {
  constructor(private http: HttpClient) {}
  /**
   * suggestions profile
   */
  suggProUrl =
    'https://instagram-scraper-2022.p.rapidapi.com/ig/similar_accounts/';
  suggProfParam = new HttpParams().set('id_user', '528817151');
  suggProfHeader = new HttpHeaders()
    .set('X-RapidAPI-Key', '0ad39d22eemsh234329f2bffd585p1712e5jsn6770b4f591d3')
    .set('X-RapidAPI-Host', 'instagram-scraper-2022.p.rapidapi.com');
  suggProfParamOptions = {
    params: this.suggProfParam,
    header: this.suggProfHeader,
  };

  suggestedProfile() {
    return this.http.get(this.suggProUrl, this.suggProfParamOptions);
  }
}
