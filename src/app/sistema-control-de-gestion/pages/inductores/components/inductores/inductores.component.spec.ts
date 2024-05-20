import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InductoresComponent } from './inductores.component';

describe('InductoresComponent', () => {
  let component: InductoresComponent;
  let fixture: ComponentFixture<InductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InductoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
