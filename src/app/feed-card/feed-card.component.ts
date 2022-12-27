import { Component, OnInit, Input } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  constructor(){}

  @Input() feed:MeetMateDataList[];
  ngOnInit(): void {

  }

}
