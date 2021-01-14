import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompoComponent } from './form-compo.component';

describe('FormCompoComponent', () => {
  let component: FormCompoComponent;
  let fixture: ComponentFixture<FormCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
