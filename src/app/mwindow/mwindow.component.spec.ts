import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwindowComponent } from './mwindow.component';

describe('MwindowComponent', () => {
  let component: MwindowComponent;
  let fixture: ComponentFixture<MwindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MwindowComponent]
    });
    fixture = TestBed.createComponent(MwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
