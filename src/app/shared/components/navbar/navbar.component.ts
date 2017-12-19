import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
