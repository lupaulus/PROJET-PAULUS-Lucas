import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCompoComponent } from './accueil-compo.component';

describe('AccueilCompoComponent', () => {
  let component: AccueilCompoComponent;
  let fixture: ComponentFixture<AccueilCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
