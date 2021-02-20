import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { XSelfieComponent } from '../x-selfie/x-selfie.component';
import { UserService } from '../_shared/user.service';
@Component({
  selector: 'app-x-settings',
  templateUrl: './x-settings.component.html',
  styleUrls: ['./x-settings.component.scss']
})
export class XSettingsComponent {

  public username: string;
  public photo: string;

  constructor(
    public dialog: MatDialog,
    public userService: UserService) {

    this.username = userService.getUserName();
    this.photo = userService.getPhoto();
  }

  openDialog() {
    const dialogRef = this.dialog.open(XSelfieComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.photo = this.userService.getPhoto();
    });
  }
}
