import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputCuatroComponent } from './input-output-cuatro.component';

describe('InputOutputCuatroComponent', () => {
  let component: InputOutputCuatroComponent;
  let fixture: ComponentFixture<InputOutputCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
