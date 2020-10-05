import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AboutAuthorComponent} from './about-author.component';
import {AboutAuthorRoutingModule} from './about-author-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutAuthorRoutingModule
  ],
  declarations: [AboutAuthorComponent]
})
export class AboutAuthorModule {}
