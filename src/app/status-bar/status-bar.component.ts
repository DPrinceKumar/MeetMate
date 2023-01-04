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

  username:string;imgSrc:string;imgAlt:string;
  openPopup(_id:string,statusImage:string,statusImgAlt:string,statusUsrname:string) {
    this.displayStyle = 'block';
    for (let i = 0; i < this.statusData.length; i++) {
      if (this.statusData[i]._id===_id){
        this.username = this.statusData[i].userName;
        this.imgSrc=this.statusData[i].statusImg;
        this.imgAlt=this.statusData[i].statusbarAlt;
      }

    }
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  @Input() statusData: MeetMateDataList[];
}
