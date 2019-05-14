import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';
import { ListPokemonComponentComponent } from './list-pokemon-component/list-pokemon-component.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { TriPkmn } from './Test-tri-pipe';
import { PokemonsService } from './pokemons.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        PokemonsRoutingModule
    ],
    declarations: [
        DetailPokemonComponentComponent,
        ListPokemonComponentComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        TriPkmn,
        PokemonFormComponent,
        EditPokemonComponent
    ],
    providers: [PokemonsService]

})

export class PokemonModule { }