import { Pipe, PipeTransform } from "@angular/core";
import { Pokemon } from './pokemon';

@Pipe({ name: "tri" })
export class TriPkmn implements PipeTransform {


    transform(pokemon: Pokemon[], size: number) :Pokemon[]{
        return pokemon.filter(p=>p.name.length>size);
    }

}