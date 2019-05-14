import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponentComponent } from './list-pokemon-component/list-pokemon-component.component';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponentComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponentComponent },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent }


];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
