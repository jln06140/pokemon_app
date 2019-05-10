import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';

@Component({
  selector: 'app-detail-pokemon-component',
  templateUrl: './detail-pokemon-component.component.html',
  styleUrls: ['./detail-pokemon-component.component.css']
})
export class DetailPokemonComponentComponent implements OnInit {

  pokemons: Pokemon[] = null;
  pokemon:Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pokemons = POKEMONS;
    let id = +this.route.snapshot.paramMap.get('id');
    for (let i=0; i< this.pokemons.length; i++){
      if(this.pokemons[i].id == id){
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack():void{
    this.router.navigate(['pokemons']);
  }

}
