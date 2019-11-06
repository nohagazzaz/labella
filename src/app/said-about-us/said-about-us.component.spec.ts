import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidAboutUsComponent } from './said-about-us.component';

describe('SaidAboutUsComponent', () => {
  let component: SaidAboutUsComponent;
  let fixture: ComponentFixture<SaidAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
