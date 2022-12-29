import { Component, OnInit, Input } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
})
export class FeedCardComponent implements OnInit {
  status: any;
  userInfo: any;
  constructor(private meetMate: StatusService) {
    // console.log('meetMateData', meetMate);
    meetMate.status().subscribe((data) => {
      this.status = data;
      console.log(
        'this.status',
        this.status.data.user.edge_owner_to_timeline_media.edges[0].node
      );
    });
    meetMate.userInfo().subscribe((data) => {
      this.userInfo = data;
      console.log('this.userInfo', this.userInfo.user);
    });
  }

  // @Input() feed: MeetMateDataList[];
  ngOnInit(): void {
    // this.data=
  }
}
