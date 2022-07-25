import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurationComponent } from './procuration.component';

describe('ProcurationComponent', () => {
  let component: ProcurationComponent;
  let fixture: ComponentFixture<ProcurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
