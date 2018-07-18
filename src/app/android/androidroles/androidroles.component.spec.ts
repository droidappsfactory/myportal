import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidrolesComponent } from './androidroles.component';

describe('AndroidrolesComponent', () => {
  let component: AndroidrolesComponent;
  let fixture: ComponentFixture<AndroidrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
