import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoodamaniComponent } from './soodamani.component';

describe('SoodamaniComponent', () => {
  let component: SoodamaniComponent;
  let fixture: ComponentFixture<SoodamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoodamaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoodamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
