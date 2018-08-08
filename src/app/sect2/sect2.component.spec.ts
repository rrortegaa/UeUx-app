import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sect2Component } from './sect2.component';

describe('Sect2Component', () => {
  let component: Sect2Component;
  let fixture: ComponentFixture<Sect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
