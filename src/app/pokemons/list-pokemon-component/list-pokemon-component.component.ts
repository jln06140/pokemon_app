import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon-component.component.html',
  styleUrls: ['./list-pokemon-component.component.css']
})
export class ListPokemonComponentComponent implements OnInit {

  constructor(private router: Router, private pokemonService : PokemonsService) { }

  values = "";
  utilisateur: any;
  pokemons: Pokemon[] = null;
  title = '';

  ngOnInit(): void {
    this.getPokemons();
    this.utilisateur = "54";
  }

  getPokemons(){
    this.pokemons = this.pokemonService.getPokemons();
  }

  onKey(value: string) {
    this.values = value;
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
