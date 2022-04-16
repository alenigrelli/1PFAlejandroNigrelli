import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmProfesoresComponent } from './abm-profesores.component';

describe('AbmProfesoresComponent', () => {
  let component: AbmProfesoresComponent;
  let fixture: ComponentFixture<AbmProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
