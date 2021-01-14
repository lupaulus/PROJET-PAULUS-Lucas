import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCompoComponent } from './recap-compo.component';

describe('RecapCompoComponent', () => {
  let component: RecapCompoComponent;
  let fixture: ComponentFixture<RecapCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
