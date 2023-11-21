import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurusothComponent } from './purusoth.component';

describe('PurusothComponent', () => {
  let component: PurusothComponent;
  let fixture: ComponentFixture<PurusothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurusothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurusothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
