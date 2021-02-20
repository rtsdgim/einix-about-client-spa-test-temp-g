import { Component, OnInit } from '@angular/core';
import { SaferService } from '../_shared/safer.service';

@Component({
  selector: 'app-x-safer-admin',
  templateUrl: './x-safer-admin.component.html',
  styleUrls: ['./x-safer-admin.component.scss']
})
export class XSaferAdminComponent implements OnInit {

  public requests = null;
  public currentSelectedRequest = null;

  constructor(
    public saferService: SaferService
  ) {
    this.requests = this.saferService.getAllRequests();
    console.log(this.requests);
  }

  ngOnInit() {
  }

  showRequestDetails(id) {
    this.currentSelectedRequest = this.requests[id];
  }
}