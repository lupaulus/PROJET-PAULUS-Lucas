import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompoComponent } from './header-compo.component';

describe('HeaderCompoComponent', () => {
  let component: HeaderCompoComponent;
  let fixture: ComponentFixture<HeaderCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
