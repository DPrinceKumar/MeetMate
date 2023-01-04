import { Component, Input, OnInit } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
import { StatusService } from '../services/status/status.service';
@Component({
  selector: 'app-suggestions-for-you',
  templateUrl: './suggestions-for-you.component.html',
  styleUrls: ['./suggestions-for-you.component.css'],
})
export class SuggestionsForYouComponent implements OnInit {
  suggestions: any;
  @Input() SuggestionsForYou: MeetMateDataList[];
  constructor(private meetMateProfileSugg: StatusService) {
    // meetMateProfileSugg.suggestedProfile().subscribe((suggestions) => {
    //   this.suggestions = suggestions;
    //   console.log(this.suggestions.data.user.edge_chaining.edges);
    // });
  }
  ngOnInit(): void {}
}
