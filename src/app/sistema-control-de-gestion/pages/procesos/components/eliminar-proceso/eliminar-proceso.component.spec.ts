import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProcesoComponent } from './eliminar-proceso.component';

describe('EliminarProcesoComponent', () => {
  let component: EliminarProcesoComponent;
  let fixture: ComponentFixture<EliminarProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
