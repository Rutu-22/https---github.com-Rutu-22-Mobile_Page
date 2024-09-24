import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileBuyPageComponent } from './mobile-buy-page/mobile-buy-page.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileBuyPageComponent,
    NavigationPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
