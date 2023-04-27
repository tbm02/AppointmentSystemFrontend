import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenricChartComponent } from './generic-chart.component';

describe('GenricChartComponent', () => {
  let component: GenricChartComponent;
  let fixture: ComponentFixture<GenricChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenricChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenricChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
