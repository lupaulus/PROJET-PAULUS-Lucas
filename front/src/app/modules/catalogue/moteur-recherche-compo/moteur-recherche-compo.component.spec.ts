import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteurRechercheCompoComponent } from './moteur-recherche-compo.component';

describe('MoteurRechercheCompoComponent', () => {
  let component: MoteurRechercheCompoComponent;
  let fixture: ComponentFixture<MoteurRechercheCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoteurRechercheCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoteurRechercheCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
