import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesEventsAndNgModelComponent } from './attributes-events-and-ng-model.component';

describe('AttributesEventsAndNgModelComponent', () => {
  let component: AttributesEventsAndNgModelComponent;
  let fixture: ComponentFixture<AttributesEventsAndNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesEventsAndNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesEventsAndNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
