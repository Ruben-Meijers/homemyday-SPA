import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {RouterModule} from '@angular/router';
import { RecommendationItemComponent } from './recommendation-item/recommendation-item.component';
import { ResultItemComponent } from './result-item/result-item.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SearchbarComponent,
    RecommendationItemComponent
  ],
  declarations: [NavbarComponent, FooterComponent, SearchbarComponent, RecommendationItemComponent, ResultItemComponent]
})
export class ComponentsModule { }
