
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration-confirmation',
  templateUrl: './user-registration-confirmation.component.html',
  styleUrls: ['./user-registration-confirmation.component.scss']
})
export class UserRegistrationConfirmationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.route.navigate(['/businessUserLogin']);
  }

}
