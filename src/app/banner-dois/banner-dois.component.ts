import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-banner-dois',
  templateUrl: './banner-dois.component.html',
  styleUrls: ['./banner-dois.component.css']
})
export class BannerDoisComponent {
constructor(private router: Router){

}
portifolioRota(){

this.router.navigate(['portifolio'])
}
}
