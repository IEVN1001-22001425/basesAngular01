import { Component } from '@angular/core';
import { calcularResistencia } from './operacionesResistencia';

export class Resistencia {
    colorBanda1: string = '';
    colorBanda2: string = '';
    colorBanda3: string = '';
    textoTolerancia: string = '';
    valor: number = 0;
    valorMax: number = 0;
    valorMin: number = 0;
}

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
   
  opcionBanda1: string = '';
  opcionBanda2: string = '';
  opcionBanda3: string = '';
  opcionToleracia: string = '';
  resultado?: Resistencia;

  calcular(): void {
   
    const b1 = parseInt(this.opcionBanda1, 10);
    const b2 = parseInt(this.opcionBanda2, 10);
    const multiplicador = parseInt(this.opcionBanda3, 10);
    const tolerancia = parseInt(this.opcionToleracia, 10);

    
    this.resultado = calcularResistencia(b1, b2, multiplicador, tolerancia);
  }
    
}
