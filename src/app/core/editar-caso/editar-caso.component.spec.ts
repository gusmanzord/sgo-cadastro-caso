import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCasoComponent } from './editar-caso.component';

describe('EditarCasoComponent', () => {
  let component: EditarCasoComponent;
  let fixture: ComponentFixture<EditarCasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
