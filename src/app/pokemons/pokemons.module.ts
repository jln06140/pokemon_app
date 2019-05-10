import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';
import { ListPokemonComponentComponent } from './list-pokemon-component/list-pokemon-component.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { TriPkmn } from './Test-tri-pipe';

@NgModule({

    imports: [
        CommonModule,
        PokemonsRoutingModule
    ],
    declarations: [
        DetailPokemonComponentComponent,
        ListPokemonComponentComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        TriPkmn
    ],
    providers: []

})

export class PokemonModule { }