import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConstitucionalComponent } from './formulario-constitucional.component';

describe('FormularioConstitucionalComponent', () => {
  let component: FormularioConstitucionalComponent;
  let fixture: ComponentFixture<FormularioConstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioConstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioConstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
