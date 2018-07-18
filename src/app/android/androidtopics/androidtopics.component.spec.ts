import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidtopicsComponent } from './androidtopics.component';

describe('AndroidtopicsComponent', () => {
  let component: AndroidtopicsComponent;
  let fixture: ComponentFixture<AndroidtopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidtopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
