import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { SearchComponent } from './search/search.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SearchService } from './search/services/search.service';
import { GeneralRoutingModule } from './general.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchComponent,
    DataTableComponent,
    DataDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GeneralRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SearchComponent,
    DataTableComponent,
    DataDetailComponent
  ],
  providers: [
    SearchService
  ]
})
export class GeneralModule { }
