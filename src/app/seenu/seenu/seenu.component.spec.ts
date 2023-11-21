import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenuComponent } from './seenu.component';

describe('SeenuComponent', () => {
  let component: SeenuComponent;
  let fixture: ComponentFixture<SeenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
