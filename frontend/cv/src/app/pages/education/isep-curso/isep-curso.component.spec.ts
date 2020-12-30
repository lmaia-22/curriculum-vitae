import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsepCursoComponent } from './isep-curso.component';

describe('IsepCursoComponent', () => {
  let component: IsepCursoComponent;
  let fixture: ComponentFixture<IsepCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsepCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsepCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
