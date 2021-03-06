import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ReceiveProductComponent,
    ShipOrderComponent,
    OrdersToShipComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
