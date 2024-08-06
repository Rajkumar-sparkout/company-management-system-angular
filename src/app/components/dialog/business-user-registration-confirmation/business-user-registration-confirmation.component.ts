import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-user-registration-confirmation',
  templateUrl: './business-user-registration-confirmation.component.html',
  styleUrls: ['./business-user-registration-confirmation.component.scss']
})
export class BusinessUserRegistrationConfirmationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  gotoLogin(){
    this.route.navigate(['/businessUserLogin'])
  }

}
