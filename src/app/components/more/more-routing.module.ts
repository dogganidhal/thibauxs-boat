import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MorePage } from './more.page';

const routes: Routes = [
  {
    path: '',
    component: MorePage,
  },
  {
    path: 'contact',
    loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about-author',
    loadChildren: () => import('../about-author/about-author.module').then(m => m.AboutAuthorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MorePageRoutingModule {}
