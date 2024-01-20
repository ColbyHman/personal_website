import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Add any logic or properties if needed
  showDropdownOne = false;
  showDropdownTwo = false;

  constructor() {
    console.log('NavbarComponent created');
  }

  toggleDropdownOne() {
    this.showDropdownOne = !this.showDropdownOne;
  }
  toggleDropdownTwo() {
    this.showDropdownTwo = !this.showDropdownTwo;
  }
}
