import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresMainPageComponent } from './indicadores-main-page.component';

describe('IndicadoresMainPageComponent', () => {
  let component: IndicadoresMainPageComponent;
  let fixture: ComponentFixture<IndicadoresMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadoresMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndicadoresMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
