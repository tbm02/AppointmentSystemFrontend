import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldComponentComponent } from './dynamic-field-component.component';

describe('DynamicFieldComponentComponent', () => {
  let component: DynamicFieldComponentComponent;
  let fixture: ComponentFixture<DynamicFieldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFieldComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
