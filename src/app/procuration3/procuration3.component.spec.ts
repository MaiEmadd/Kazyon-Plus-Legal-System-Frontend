import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procuration3Component } from './procuration3.component';

describe('Procuration3Component', () => {
  let component: Procuration3Component;
  let fixture: ComponentFixture<Procuration3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Procuration3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procuration3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
