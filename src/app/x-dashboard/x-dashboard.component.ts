import { Component, OnInit } from '@angular/core';
import { UserService } from '../_shared/user.service';

@Component({
  selector: 'app-x-dashboard',
  templateUrl: './x-dashboard.component.html',
  styleUrls: ['./x-dashboard.component.scss']
})
export class XDashboardComponent implements OnInit {

  public userName: string;
  public userPhoto: string;

  constructor(public userService: UserService) {
    this.userName = userService.getUserName();
    this.userPhoto = userService.getPhoto();
  }

  ngOnInit() {
  }
}
