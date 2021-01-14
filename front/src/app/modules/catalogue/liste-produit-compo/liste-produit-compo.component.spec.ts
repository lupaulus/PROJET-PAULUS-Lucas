import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitCompoComponent } from './liste-produit-compo.component';

describe('ListeProduitCompoComponent', () => {
  let component: ListeProduitCompoComponent;
  let fixture: ComponentFixture<ListeProduitCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProduitCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
