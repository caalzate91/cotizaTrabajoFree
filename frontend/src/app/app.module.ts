import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { BillComponent } from './bill/bill.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    WorkOrderComponent,
    BillComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
