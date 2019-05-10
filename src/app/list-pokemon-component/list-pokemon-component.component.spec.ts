import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonComponentComponent } from './list-pokemon-component.component';

describe('ListPokemonComponentComponent', () => {
  let component: ListPokemonComponentComponent;
  let fixture: ComponentFixture<ListPokemonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPokemonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
