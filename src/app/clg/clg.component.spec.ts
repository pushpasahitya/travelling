import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgComponent } from './clg.component';

describe('ClgComponent', () => {
  let component: ClgComponent;
  let fixture: ComponentFixture<ClgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
