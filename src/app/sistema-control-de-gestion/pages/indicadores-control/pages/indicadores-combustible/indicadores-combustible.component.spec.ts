import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresCombustibleComponent } from './indicadores-combustible.component';

describe('IndicadoresCombustibleComponent', () => {
  let component: IndicadoresCombustibleComponent;
  let fixture: ComponentFixture<IndicadoresCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadoresCombustibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndicadoresCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
