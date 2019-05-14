import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonsService) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);

  }

}
