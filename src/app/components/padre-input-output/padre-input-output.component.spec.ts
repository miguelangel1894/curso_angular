import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreInputOutputComponent } from './padre-input-output.component';

describe('PadreInputOutputComponent', () => {
  let component: PadreInputOutputComponent;
  let fixture: ComponentFixture<PadreInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
