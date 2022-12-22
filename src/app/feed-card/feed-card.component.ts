import { Component, OnInit } from '@angular/core';
import { FeedCardDataList } from './feed-card-Data';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  constructor(){}
  feedCardDataList:FeedCardDataList[]=[];
  ngOnInit(): void {
    this.feedCardDataList = [
      {
        profilePicture:"https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f",
        userName: 'Prince Kumar',
        feedImageUrl:'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        feedImageAlt:"feed-Prince Kumar",
        comments:"😁🙌",
        commentCount:30,
        daysAgoCount:12
      },
      {
        profilePicture:"https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f",
        userName: 'Pankaj Kuamr',
        feedImageUrl:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
          feedImageAlt:"feed-Pankaj Kuamr",
        comments:"😁🙌",
        commentCount:30,
        daysAgoCount:12
      },
      {
        profilePicture:"https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f",
        userName: 'Anuttar Jain',
        feedImageUrl:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
          feedImageAlt:"feed-Anuttar Jain",
        comments:"😁🙌",
        commentCount:30,
        daysAgoCount:12
      },
      {
        profilePicture:"https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f",
        userName: 'anurag Tomar',
        feedImageUrl:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
          feedImageAlt:"feed-anurag Tomar",
        comments:"😁🙌",
        commentCount:30,
        daysAgoCount:12
      },
      {
        profilePicture:"https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f",
        userName: 'Kishan Kumar',
        feedImageUrl:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
          feedImageAlt:"feed-Kishan Kumar",
        comments:"😁🙌",
        commentCount:30,
        daysAgoCount:12
      },
      {
        profilePicture:"https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f",
        userName: 'jhon lal',
        feedImageUrl:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
          feedImageAlt:"feed-jhon lal",
        comments:"😁🙌",
        commentCount:30,
        daysAgoCount:12
      },
    ];
  }

}
