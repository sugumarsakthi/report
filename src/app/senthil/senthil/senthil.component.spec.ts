import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenthilComponent } from './senthil.component';

describe('SenthilComponent', () => {
  let component: SenthilComponent;
  let fixture: ComponentFixture<SenthilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenthilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenthilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
