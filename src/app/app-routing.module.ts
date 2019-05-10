import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponentComponent } from './list-pokemon-component/list-pokemon-component.component';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'pokemons', component:ListPokemonComponentComponent},
  {path:'pokemon/:id', component:DetailPokemonComponentComponent},
  {path:'', redirectTo:'pokemons',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
