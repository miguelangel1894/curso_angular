import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDosComponent } from './input-output-dos.component';

describe('InputOutputDosComponent', () => {
  let component: InputOutputDosComponent;
  let fixture: ComponentFixture<InputOutputDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
