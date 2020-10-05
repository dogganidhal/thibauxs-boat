import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatsPage } from './boats.page';

const routes: Routes = [
  {
    path: '',
    component: BoatsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatsPageRoutingModule {}
