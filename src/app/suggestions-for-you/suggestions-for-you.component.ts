import { Component, OnInit } from '@angular/core';
import { SuggestionsForYouDatalist } from './suggestionsData';

@Component({
  selector: 'app-suggestions-for-you',
  templateUrl: './suggestions-for-you.component.html',
  styleUrls: ['./suggestions-for-you.component.css'],
})
export class SuggestionsForYouComponent implements OnInit {
  userList: SuggestionsForYouDatalist[] = [];
  constructor() {}
  ngOnInit(): void {
    this.userList = [
      {
        username: '@abtdprincekumar',
        Full_name: 'Prince kumar',
        imageUrl:
          'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
        imageUrlAlt: 'profile-Picture',
      },
      {
        username: '@pankaj2kumar56',
        Full_name: 'Pankaj kumar',
        imageUrl:
          'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
        imageUrlAlt: 'profile-Picture',
      },
      {
        username: '@anuragSinghtT',
        Full_name: 'Anurag Singh tomar',
        imageUrl:
          'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
        imageUrlAlt: 'profile-Picture',
      },
    ];
  }
}
