import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './entities/contact/contact.component';
import { HomeComponent } from './entities/home/home.component';
import { OfferComponent } from './entities/offer/offer.component';
import { MenuUrl } from './shared/enums';

const routes: Routes = [
  { path: MenuUrl.CONTACT, component: ContactComponent, },
  { path: MenuUrl.HOME, component: HomeComponent },
  { path: MenuUrl.OFFER, component: OfferComponent, },
  { path: '', pathMatch: 'full', redirectTo: `/${MenuUrl.HOME}` },
  { path: '**', pathMatch: 'full', redirectTo: `/${MenuUrl.HOME}` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
