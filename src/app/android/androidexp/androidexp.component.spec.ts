import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidexpComponent } from './androidexp.component';

describe('AndroidexpComponent', () => {
  let component: AndroidexpComponent;
  let fixture: ComponentFixture<AndroidexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
