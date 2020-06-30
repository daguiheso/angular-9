import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBasicComponent } from './forms-basic.component';

describe('FormsBasicComponent', () => {
  let component: FormsBasicComponent;
  let fixture: ComponentFixture<FormsBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
