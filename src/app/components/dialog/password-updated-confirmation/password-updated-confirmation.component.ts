import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-updated-confirmation',
  templateUrl: './password-updated-confirmation.component.html',
  styleUrls: ['./password-updated-confirmation.component.scss']
})
export class PasswordUpdatedConfirmationComponent implements OnInit {

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
