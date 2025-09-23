import { Pipe, PipeTransform } from '@angular/core';
import { Iheroes } from './iheroes';

@Pipe({
  name: 'heroesFilter', //Buscar que es pipe? formulario tipo template
  standalone: false   
})
export class HeroesFilterPipe implements PipeTransform {

  transform(value: Iheroes[], args: string): Iheroes[] { //tipo de la interfaz
    let filter: string =args?args.toLocaleLowerCase():'';

    return filter?value.filter((hero:Iheroes)=> 
    hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1): value;//recibe string, regresa

  }

}
