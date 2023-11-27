import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzComponent } from './jazz.component';

describe('JazzComponent', () => {
  let component: JazzComponent;
  let fixture: ComponentFixture<JazzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JazzComponent]
    });
    fixture = TestBed.createComponent(JazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
