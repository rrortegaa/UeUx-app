import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sect3Component } from './sect3.component';

describe('Sect3Component', () => {
  let component: Sect3Component;
  let fixture: ComponentFixture<Sect3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sect3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sect3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
