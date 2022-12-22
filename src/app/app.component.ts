import { Component, OnInit } from '@angular/core';
import { MeetMateDataList } from './MeetMateData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chitChat';
  // data:[];
  data: MeetMateDataList[];

  constructor() {}
  ngOnInit(): void {
    this.data= [
      {
        userName: '@abtdprincekumar',
        fullName: 'Prince Kumar',
        email: 'abtdprincekumar@gmail.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'User profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: 'feed-',
        comments: ' ❤️ 👌 ',
        commentCount: 12,
        postDays: 30,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: 'status-',
      },
    ];
  }
}
