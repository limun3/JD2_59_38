import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddATypeComponent } from './add-accommodationtype.component';

describe('AccomodationTypeAddComponent', () => {
  let component: AddATypeComponent;
  let fixture: ComponentFixture<AddATypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddATypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddATypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
