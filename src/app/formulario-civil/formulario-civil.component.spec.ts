import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCivilComponent } from './formulario-civil.component';

describe('FormularioCivilComponent', () => {
  let component: FormularioCivilComponent;
  let fixture: ComponentFixture<FormularioCivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
