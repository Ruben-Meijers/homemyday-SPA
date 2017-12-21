import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.scss']
})
export class RecommendationItemComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit() {
  }

}
