import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidscreensComponent } from './androidscreens.component';

describe('AndroidscreensComponent', () => {
  let component: AndroidscreensComponent;
  let fixture: ComponentFixture<AndroidscreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidscreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidscreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
