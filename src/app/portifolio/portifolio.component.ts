import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {
  motor : boolean =true;
  ferramenta :boolean = false;
  bomba : boolean = false

  ngAfterViewInit() {
    ScrollReveal().reveal('.text-animation', {
      duration: 1000,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      easing: 'ease-in-out',
      reset: true
    });
    
  }
  
  mostrarFerramenta(){
    this. motor =false
    this.bomba = false
    this.ferramenta= true
  }
  mostrarBomba(){
    this. motor =false
    this.bomba = true
    this.ferramenta= false
  }
  mostrarMotor(){
    
      this. motor =true
      this.bomba = false
      this.ferramenta= false
    
  }
}
