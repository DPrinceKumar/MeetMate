import { Component, Input } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
import { SwitchProfileService } from '../services/suggestions/switch-profile.service';

@Component({
  selector: 'app-profile-switch',
  templateUrl: './profile-switch.component.html',
  styleUrls: ['./profile-switch.component.css'],
})
export class ProfileSwitchComponent {
  @Input() switch: MeetMateDataList[];
  profile: any;
  constructor(private meeMateSwitchProfile: SwitchProfileService) {
    // meeMateSwitchProfile.suggestedProfile().subscribe((profile) => {
    //   this.profile = profile;
    //   console.log(this.profile.user);
    // });
  }
}
