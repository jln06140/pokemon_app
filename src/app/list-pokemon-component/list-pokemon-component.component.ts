import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon-component.component.html',
  styleUrls: ['./list-pokemon-component.component.css']
})
export class ListPokemonComponentComponent implements OnInit {

  constructor(private router: Router) { }

  values = "";
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

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
