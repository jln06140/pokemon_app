import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon-component',
  templateUrl: './detail-pokemon-component.component.html',
  styleUrls: ['./detail-pokemon-component.component.css']
})
export class DetailPokemonComponentComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonsService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getPokemon(id);
  }


goBack(): void {
  this.router.navigate(['pokemons']);
}

}
