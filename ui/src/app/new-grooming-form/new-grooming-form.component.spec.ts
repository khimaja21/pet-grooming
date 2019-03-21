import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroomingFormComponent } from './new-grooming-form.component';

describe('NewGroomingFormComponent', () => {
  let component: NewGroomingFormComponent;
  let fixture: ComponentFixture<NewGroomingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroomingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroomingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
