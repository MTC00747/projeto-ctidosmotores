import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { HomeAppComponent } from './home-app/home-app.component';

const routes: Routes = [
  { path: 'portifolio', component: PortifolioComponent },
  { path: '', component: HomeAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
