import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input()
  pokemon: Pokemon;
  types: Array<string>;

  constructor(private pokemonService: PokemonsService, private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypes();
  }

  hasType(type: string): boolean {
    let ispresent = false;
    this.pokemon.types.forEach(e => {if(e === type) ispresent = true;});
    return ispresent;
  }

  selectType($event: any, type: string) {
    let checked = $event.target.checked;
    console.log(checked);
    if (checked)
      this.pokemon.types.push(type);
    else {
      let index = this.pokemon.types.indexOf(type);
      console.log(index);
      if (~index) this.pokemon.types.splice(index, 1);
    }
  }

  isTypeValid(type: string) {
    if (this.pokemon.types.length === 1 && this.hasType(type))
      return false;
    if (this.pokemon.types.length >= 3 && !this.hasType(type))
      return false;
    return true;
  }

  onSubmit() {
    console.log('Submit form!');
    let link = ['/pokemon', this.pokemon.id]
    this.router.navigate(link);
  }

}
