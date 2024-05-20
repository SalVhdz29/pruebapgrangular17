import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInductoresComponent } from './editar-inductores.component';

describe('EditarInductoresComponent', () => {
  let component: EditarInductoresComponent;
  let fixture: ComponentFixture<EditarInductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarInductoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarInductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
