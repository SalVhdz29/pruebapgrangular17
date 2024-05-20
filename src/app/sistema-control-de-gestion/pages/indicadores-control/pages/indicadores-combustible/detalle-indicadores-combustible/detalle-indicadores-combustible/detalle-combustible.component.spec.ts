import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIndicadoresCombustibleComponent } from './detalle-combustible.component';

describe('DetalleIndicadoresCombustibleComponent', () => {
  let component: DetalleIndicadoresCombustibleComponent;
  let fixture: ComponentFixture<DetalleIndicadoresCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleIndicadoresCombustibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleIndicadoresCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
