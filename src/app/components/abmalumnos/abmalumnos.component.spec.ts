import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMalumnosComponent } from './abmalumnos.component';

describe('ABMalumnosComponent', () => {
  let component: ABMalumnosComponent;
  let fixture: ComponentFixture<ABMalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMalumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
