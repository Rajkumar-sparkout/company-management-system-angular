import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password-create',
  templateUrl: './new-password-create.component.html',
  styleUrls: ['./new-password-create.component.scss']
})
export class NewPasswordCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  passwordForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      Validators.required
    ]),
    confirmNewPassword: new FormControl('', Validators.required),
  });

}
