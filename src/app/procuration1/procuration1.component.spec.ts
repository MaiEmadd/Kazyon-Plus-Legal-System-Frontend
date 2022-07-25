import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procuration1Component } from './procuration1.component';

describe('Procuration1Component', () => {
  let component: Procuration1Component;
  let fixture: ComponentFixture<Procuration1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Procuration1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procuration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
