import { Component, Input, OnInit } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
@Component({
  selector: 'app-suggestions-for-you',
  templateUrl: './suggestions-for-you.component.html',
  styleUrls: ['./suggestions-for-you.component.css'],
})
export class SuggestionsForYouComponent implements OnInit {
  @Input() SuggestionsForYou: MeetMateDataList[];
  constructor() {}
  ngOnInit(): void {}
}
