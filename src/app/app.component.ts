import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cmsys';

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  userLogin = false;
  userLogout = true;

  ngOnInit(): void {
    
    if(this.loginService.getUserMobileNumber() != null){
      this.userLogout = false;
      this.userLogin = true;
      this.route.navigate(['/smartbu2c/dashboard']);
    }else{
      this.userLogout = true;
      this.userLogin = false;
    }
  }
}
