import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumAndCastingComponent } from './enum-and-casting.component';

describe('EnumAndCastingComponent', () => {
  let component: EnumAndCastingComponent;
  let fixture: ComponentFixture<EnumAndCastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumAndCastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumAndCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
