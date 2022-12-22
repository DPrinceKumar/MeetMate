import { Component, Input, OnInit } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
import { SuggestionsForYouDatalist } from './suggestionsData';

@Component({
  selector: 'app-suggestions-for-you',
  templateUrl: './suggestions-for-you.component.html',
  styleUrls: ['./suggestions-for-you.component.css'],
})
export class SuggestionsForYouComponent implements OnInit {
  userList: SuggestionsForYouDatalist[] = [];


  @Input() SuggestionsForYou:MeetMateDataList[];
  constructor() {}
  ngOnInit(): void {

  }
}
