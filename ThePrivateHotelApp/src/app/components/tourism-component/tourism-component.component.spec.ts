import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismComponentComponent } from './tourism-component.component';

describe('TourismComponentComponent', () => {
  let component: TourismComponentComponent;
  let fixture: ComponentFixture<TourismComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
