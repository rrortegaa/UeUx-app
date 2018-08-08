import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sect4Component } from './sect4.component';

describe('Sect4Component', () => {
  let component: Sect4Component;
  let fixture: ComponentFixture<Sect4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sect4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sect4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
