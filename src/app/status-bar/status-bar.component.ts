import { Component, Input, OnInit, Output } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  displayStyle = 'none';

  username: string;
  imgSrc: string;
  imgAlt: string;

  openPopup(
    _id: string,
    statusImage: string,
    statusImgAlt: string,
    statusUsrname: string
  ) {
    this.displayStyle = 'block';

    this.statusData.map((curVal, index, statusData) => {
      if (curVal._id === _id) {
        this.username = curVal.userName;
        this.imgSrc = curVal.statusImg;
        this.imgAlt = curVal.statusbarAlt;
      }
    });
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  @Input() statusData: MeetMateDataList[];
}
