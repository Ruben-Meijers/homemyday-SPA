import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: string[] = ['Accomodation #1', 'Accomodation #2', 'Accomodation #3', 'Accomodation #4'];

  constructor() { }

  ngOnInit() {
  }

}
