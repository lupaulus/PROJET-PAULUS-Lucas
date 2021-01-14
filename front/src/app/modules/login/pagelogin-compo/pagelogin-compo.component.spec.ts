import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageloginCompoComponent } from './pagelogin-compo.component';

describe('PageloginCompoComponent', () => {
  let component: PageloginCompoComponent;
  let fixture: ComponentFixture<PageloginCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageloginCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageloginCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
