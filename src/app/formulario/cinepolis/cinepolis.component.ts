import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre: string = '';
  cantidadCompradores: number = 1;
  opcionTarjeta: string = 'no';
  cantidadBoletas: number = 0;

  mensajeError: string = '';
  valorPagar: number = 0;

  procesar(): void {
    
    const limiteBoletos = 7 * this.cantidadCompradores;

    if(this.cantidadBoletas > limiteBoletos ){
      this.mensajeError = 'No puedes comprar tantos boletos';
      return
    }

    const costoBoleta = 12000;
    const totalBruto = costoBoleta * this.cantidadBoletas
    let descuento = 0;

    if (this.cantidadBoletas > 5) {
      descuento = totalBruto * 0.15; 
    } else if (this.cantidadBoletas >= 3) {
      descuento = totalBruto * 0.10; 
    }

    const subtotal = totalBruto - descuento;

    let descuentoTarjeta = 0;

    if(this.opcionTarjeta == 'si'){
      descuentoTarjeta = subtotal * 0.10;
      
    }
    this.valorPagar = subtotal - descuentoTarjeta;

  }
  
  limpiar():void{
    
   this.nombre= '';
   this.cantidadCompradores= 1;
   this.opcionTarjeta= 'no';
   this.cantidadBoletas= 0;
   this.valorPagar=0;
   this.mensajeError='';

  }
  
}
