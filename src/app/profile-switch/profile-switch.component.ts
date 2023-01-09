import { Component, Input } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
@Component({
  selector: 'app-profile-switch',
  templateUrl: './profile-switch.component.html',
  styleUrls: ['./profile-switch.component.css'],
})
export class ProfileSwitchComponent {
  @Input() switch: MeetMateDataList[];
  profile: any;
  constructor() {}
}
