import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getPokemons() : Pokemon[]{
    return POKEMONS;
  }

  getPokemon(id: number) : Pokemon {
    return this.getPokemons().find(p => p.id == id);
  }

  getPokemonTypes(): Array<string> {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
      'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }
}
