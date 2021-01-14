import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompoComponent } from './detail-compo.component';

describe('DetailCompoComponent', () => {
  let component: DetailCompoComponent;
  let fixture: ComponentFixture<DetailCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
