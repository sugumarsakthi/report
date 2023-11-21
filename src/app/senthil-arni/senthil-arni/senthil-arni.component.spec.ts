import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenthilArniComponent } from './senthil-arni.component';

describe('SenthilArniComponent', () => {
  let component: SenthilArniComponent;
  let fixture: ComponentFixture<SenthilArniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenthilArniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenthilArniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
