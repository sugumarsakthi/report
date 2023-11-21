import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopiComponent } from './gopi.component';

describe('GopiComponent', () => {
  let component: GopiComponent;
  let fixture: ComponentFixture<GopiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
