import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponentComponent } from './list-pokemon-component/list-pokemon-component.component';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';

const pokemonsRoutes: Routes = [
  {path:'pokemons', component:ListPokemonComponentComponent},
  {path:'pokemon/:id', component:DetailPokemonComponentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
