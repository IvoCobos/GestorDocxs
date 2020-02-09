import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPenalComponent } from './formulario-penal.component';

describe('FormularioPenalComponent', () => {
  let component: FormularioPenalComponent;
  let fixture: ComponentFixture<FormularioPenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
