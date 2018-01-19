import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharCasoComponent } from './detalhar-caso.component';

describe('DetalharCasoComponent', () => {
  let component: DetalharCasoComponent;
  let fixture: ComponentFixture<DetalharCasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharCasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
