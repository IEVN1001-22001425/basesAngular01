
import { Resistencia } from './resistencia.component';


const colores = [
    'Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 
    'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'
];


export function calcularResistencia(
    valBanda1: number, 
    valBanda2: number, 
    valMultiplicador: number, 
    valTolerancia: number
): Resistencia {
    
    const resultado = new Resistencia();

    const valorBase = Number(`${valBanda1}${valBanda2}`);
    resultado.valor = valorBase * valMultiplicador;

    const variacion = resultado.valor * (valTolerancia / 100);
    resultado.valorMax = resultado.valor + variacion;
    resultado.valorMin = resultado.valor - variacion;

    resultado.colorBanda1 = colores[valBanda1];
    resultado.colorBanda2 = colores[valBanda2];
    resultado.colorBanda3 = colores[Math.log10(valMultiplicador)]; 
    resultado.textoTolerancia = valTolerancia === 5 ? 'Dorado 5%' : 'Plateado 10%';

    return resultado;
}