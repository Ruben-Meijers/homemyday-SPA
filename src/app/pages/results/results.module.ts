import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import {ResultsRoutingModule} from './results-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsComponent]
})
export class ResultsModule { }
