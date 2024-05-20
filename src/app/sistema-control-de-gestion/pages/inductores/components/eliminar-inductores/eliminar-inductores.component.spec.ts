import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInductoresComponent } from './eliminar-inductores.component';

describe('EliminarInductoresComponent', () => {
  let component: EliminarInductoresComponent;
  let fixture: ComponentFixture<EliminarInductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarInductoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarInductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
