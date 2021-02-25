import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'project/:name',
    component: DataDetailComponent,
  },
  {
    path: 'project',
    component: DataTableComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {}
