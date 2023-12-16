import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent, 
    MatButtonModule
  ]
})
export class SharedModule { }
