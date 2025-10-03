export class Distancia{
    x1:number=0;
    y1:number=0;
    x2:number=0;
    y2:number=0;

    resultado: number | null = null; 
  
    
 calcular():void{

    const valorX1 = Number(this.x1); 
    const valorY1 = Number(this.y1);
    const valorX2 = Number(this.x2);
    const valorY2 = Number(this.y2);

    const puntoUno = valorX2 - valorX1; 
    const puntoDos = valorY2 - valorY1;

    const distancia = Math.sqrt((puntoUno**2 + puntoDos**2));


    this.resultado = parseFloat(distancia.toFixed(4));
    
 }

}


