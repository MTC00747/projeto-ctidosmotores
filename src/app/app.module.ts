import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAppComponent } from './logo-app/logo-app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { BannerComponent } from './banner/banner.component';
import { InfoComponent } from './info/info.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { ContatoComponent } from './contato/contato.component';
import { BannerDoisComponent } from './banner-dois/banner-dois.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoAppComponent,
    HomeAppComponent,
    BannerComponent,
    InfoComponent,
    InformacaoComponent,
    ContatoComponent,
    BannerDoisComponent,
    PortifolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
