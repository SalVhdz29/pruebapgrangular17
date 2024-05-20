import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipaComponent } from './pagina-principa.component';

describe('PaginaPrincipaComponent', () => {
  let component: PaginaPrincipaComponent;
  let fixture: ComponentFixture<PaginaPrincipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPrincipaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaPrincipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
