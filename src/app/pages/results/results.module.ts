import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import {ResultsRoutingModule} from './results-routing.module';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule
  ],
  declarations: [ResultsComponent]
})
export class ResultsModule { }
