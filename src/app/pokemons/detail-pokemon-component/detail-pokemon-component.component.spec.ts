import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemonComponentComponent } from './detail-pokemon-component.component';

describe('DetailPokemonComponentComponent', () => {
  let component: DetailPokemonComponentComponent;
  let fixture: ComponentFixture<DetailPokemonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPokemonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
