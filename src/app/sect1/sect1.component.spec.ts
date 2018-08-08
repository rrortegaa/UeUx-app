import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sect1Component } from './sect1.component';

describe('Sect1Component', () => {
  let component: Sect1Component;
  let fixture: ComponentFixture<Sect1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sect1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
