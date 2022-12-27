import { Component } from '@angular/core';
import {
  faHeart,
  faUserCircle,
  faCompass,
  faPlusSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faRightFromBracket,
  faMagnifyingGlass,
  faHouse,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  faHeart = faHeart;
  faCompass = faCompass;
  faUserCircle = faUserCircle;
  faRightFromBracket = faRightFromBracket;
  faMagnifyingGlass = faMagnifyingGlass;
  faHouse = faHouse;
  faPlusSquare = faPlusSquare;
  faCamera = faCamera;
}
