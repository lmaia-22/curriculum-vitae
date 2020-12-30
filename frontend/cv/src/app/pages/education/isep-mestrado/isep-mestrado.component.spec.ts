import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsepMestradoComponent } from './isep-mestrado.component';

describe('IsepMestradoComponent', () => {
  let component: IsepMestradoComponent;
  let fixture: ComponentFixture<IsepMestradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsepMestradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsepMestradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
