import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEjemploComponent } from './binding-ejemplo.component';

describe('BindingEjemploComponent', () => {
  let component: BindingEjemploComponent;
  let fixture: ComponentFixture<BindingEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
