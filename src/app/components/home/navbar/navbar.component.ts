import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  color = 'white';

  ngOnInit(): void {
  }
  isMenuOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMenuOpen = window.innerWidth <= 991;
  }

  toggleMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
