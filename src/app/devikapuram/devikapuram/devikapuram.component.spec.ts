import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevikapuramComponent } from './devikapuram.component';

describe('DevikapuramComponent', () => {
  let component: DevikapuramComponent;
  let fixture: ComponentFixture<DevikapuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevikapuramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevikapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
