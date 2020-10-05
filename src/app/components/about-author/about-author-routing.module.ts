import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutAuthorComponent} from './about-author.component';

const routes: Routes = [
  {
    path: '',
    component: AboutAuthorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutAuthorRoutingModule {}
