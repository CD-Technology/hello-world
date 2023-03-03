import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ListComponent, CartComponent, SummaryComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
