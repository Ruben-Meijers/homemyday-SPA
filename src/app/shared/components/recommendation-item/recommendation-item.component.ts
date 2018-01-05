import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.scss']
})
export class RecommendationItemComponent implements OnInit {

  // @TODO Make a interface for this
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
