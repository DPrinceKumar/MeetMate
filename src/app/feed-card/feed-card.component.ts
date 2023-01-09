import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
import { StatusService } from '../services/status/status.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent implements OnInit {
  status: any;
  userInfo: any;
  Readmore = false;
  displayStyle = 'none';
  constructor() {}

  // constructor(private meetMate: StatusService) {
  //   console.log('meetMateData', meetMate);
  //   meetMate.status().subscribe((data) => {
  //     this.status = data;
  //     console.log(
  //       'this.status',
  //       this.status.data.user.edge_owner_to_timeline_media.edges[0].node
  //     );
  //   });
  //   /**
  //    * userInfo
  //    */
  //   meetMate.userInfo().subscribe((data) => {
  //     this.userInfo = data;
  //     console.log('this.userInfo', this.userInfo.user);
  //   });
  // }

  /**
   * converting unix days int to date
   * @param numOfDays
   * @returns date
   */
  dayCount(numOfDays: number): Number {
    //d1.getDate()-new Date(1666965991000).getDate()
    //console.log(d1-new Date(1666965991000));
    //Math.round(5343652822 /(3600000*24))

    return new Date(numOfDays).getDate();
  }

  /**
   * comment slicing
   */

  // comment: string;
  // slicedComment: string;
  // moreLess(_id: string, comment: String){
  //   this.feed.map((curVal) => {
  //     if (curVal._id === _id) {
  //       return this.comment;
  //     } else {
  //       return (this.slicedComment = comment.slice(0, 50));
  //     }
  // });
  // }

  @Input() feed: MeetMateDataList[];

  ngOnInit(): void {
    console.log('oninixt,', this.feed);
  }

  /**
   * OPEN MORE POPUP
   */
  openMorePopup(): void {
    this.displayStyle = 'block';
    // alert('Popup is open');
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  /**
   * like dislike
   */

  displayLikeOutLine: string = 'block';
  displayLikesolid: string = 'none';
  flag: boolean = true;

  likeDisLike() {
    if (this.flag == true) {
      this.displayLikeOutLine = 'none';
      this.displayLikesolid = 'block';
      this.flag = false;
    } else {
      this.displayLikeOutLine = 'block';
      this.displayLikesolid = 'none';
      this.flag = true;
      console.log('owbject');
    }
  }
}
