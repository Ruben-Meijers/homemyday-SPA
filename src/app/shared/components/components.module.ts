import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SearchbarComponent
  ],
  declarations: [NavbarComponent, FooterComponent, SearchbarComponent]
})
export class ComponentsModule { }
