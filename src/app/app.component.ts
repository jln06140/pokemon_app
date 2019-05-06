import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  pokemons: Pokemon[] = null;
  title = '';

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  onKey(event: any) {
    this.title = event.target.value;
  }

}
