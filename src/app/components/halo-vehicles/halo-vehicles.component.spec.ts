import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaloVehiclesComponent } from './halo-vehicles.component';

describe('HaloVehiclesComponent', () => {
  let component: HaloVehiclesComponent;
  let fixture: ComponentFixture<HaloVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaloVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaloVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
