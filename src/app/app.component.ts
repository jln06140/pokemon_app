import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './pokemons/mock-pokemon';
import { Pokemon } from './pokemons/pokemon';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  
  values="";
  utilisateur: any;
  pokemons: Pokemon[] = null;
  title = '';

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    this.utilisateur = "54";
  }

  onKey(value: string) {
    this.values = value;
  }

  selectPokemon(pokemon: Pokemon){
    console.log(pokemon.name);
  }

}
