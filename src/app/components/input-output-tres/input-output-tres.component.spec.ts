import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputTresComponent } from './input-output-tres.component';

describe('InputOutputTresComponent', () => {
  let component: InputOutputTresComponent;
  let fixture: ComponentFixture<InputOutputTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
