import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule {}
