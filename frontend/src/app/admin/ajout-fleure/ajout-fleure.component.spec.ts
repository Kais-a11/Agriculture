import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFleureComponent } from './ajout-fleure.component';

describe('AjoutFleureComponent', () => {
  let component: AjoutFleureComponent;
  let fixture: ComponentFixture<AjoutFleureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutFleureComponent]
    });
    fixture = TestBed.createComponent(AjoutFleureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
