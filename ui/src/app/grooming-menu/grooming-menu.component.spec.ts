import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingMenuComponent } from './grooming-menu.component';

describe('GroomingMenuComponent', () => {
  let component: GroomingMenuComponent;
  let fixture: ComponentFixture<GroomingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
