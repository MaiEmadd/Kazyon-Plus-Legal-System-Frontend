import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case3Component } from './case3.component';

describe('Case3Component', () => {
  let component: Case3Component;
  let fixture: ComponentFixture<Case3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
