import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BusinessUserLoginLogoutService } from 'src/app/services/business-user-login-logout.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private businessUserLoginService: BusinessUserLoginLogoutService
  ) { }

  ngOnInit(): void {
  }

  opened = false;
  // opened = true;
  toggleSidebar() {
    this.opened = !this.opened
  }

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  wantToShow = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
      if (this.sidenav !== undefined) {
        if (event.target.innerWidth <= 991) {
          this.sidenav.close();
          this.isExpanded = false;
          this.wantToShow = true;
        }else {
          this.sidenav.open();
          this.isExpanded = true;
          this.wantToShow = false;
        }
      }
  }


  logout(){
    if(this.loginService.getUserMobileNumber() != null){
      this.businessUserLoginService.logout().subscribe((resp)=> {   
        if(resp){
          var status = this.loginService.clearUser();
          if(status){
            window.location.href = ''
          }
        }
      });
    }else{
      window.location.href = '';
    }
  }

}




//   showSideNav = false;
// @HostListener('window:resize', ['$event'])
// onResize(event: any): void {
//   this.showSideNav = window.innerWidth <= 991;
// }


