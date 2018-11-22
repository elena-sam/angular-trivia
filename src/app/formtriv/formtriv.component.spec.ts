import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtrivComponent } from './formtriv.component';

describe('FormtrivComponent', () => {
  let component: FormtrivComponent;
  let fixture: ComponentFixture<FormtrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
