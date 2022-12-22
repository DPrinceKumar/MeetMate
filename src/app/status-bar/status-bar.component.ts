import { Component, Input, OnInit, Output } from '@angular/core';
import { MeetMateDataList } from '../MeetMateData';
import { StatusDataList } from './statusData';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }

  @Input() status: MeetMateDataList[];
}
