import { Component } from '@angular/core';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  
    calculo: Distancia = new Distancia();
    calcularDistancia():void{
      this.calculo.calcular();
    }
}
