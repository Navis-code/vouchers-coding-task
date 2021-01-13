import { VouchersProvider } from './providers/vouchers.provider';
import { VouchersService } from './services/vouchers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [VouchersService, VouchersProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
