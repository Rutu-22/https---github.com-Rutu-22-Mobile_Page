import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileBuyPageComponent } from './mobile-buy-page/mobile-buy-page.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/buy', pathMatch: 'full' },
  { path: '', component: NavigationPanelComponent },
  { path: 'buy', component: MobileBuyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
