import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContractComponent } from './show-contract.component';

describe('ShowContractComponent', () => {
  let component: ShowContractComponent;
  let fixture: ComponentFixture<ShowContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
