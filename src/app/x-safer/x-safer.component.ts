import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { XIncedentPhotoComponent } from '../x-incedent-photo/x-incedent-photo.component';
import { UserService } from '../_shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SaferService } from '../_shared/safer.service';

@Component({
  selector: 'app-x-safer',
  templateUrl: './x-safer.component.html',
  styleUrls: ['./x-safer.component.scss']
})
export class XSaferComponent {

  public photo: string = null;
  public requestForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    public saferService: SaferService,
    private formBuilder: FormBuilder) {

    this.requestForm = this.formBuilder.group({
      requester: [{ value: userService.getUserName(), disabled: true }],
      requesteDate: [{ value: new Date(), disabled: true }],
      location: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(XIncedentPhotoComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.photo = this.userService.getIncedentPhoto();
      this.requestForm.patchValue({
        requesteDate: new Date()
      });
    });
  }

  sendRequest() {
    if (this.requestForm.controls.location.value === '' || this.requestForm.controls.description.value === '') {
      // DO NOTHING
    } else {
      const requestModel = {
        requester: this.requestForm.controls.requester.value,
        requesterPhoto: this.userService.getPhoto(),
        requesteDate: this.requestForm.controls.requesteDate.value,
        sendDate: new Date(),
        location: this.requestForm.controls.location.value,
        description: this.requestForm.controls.description.value,
        photo: this.photo ? this.photo : '',
        isClosed: false
      };

      this.saferService.addNewRequest(requestModel);
    }
  }
}
