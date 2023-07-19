import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaComponentComponent } from './villa-component.component';

describe('VillaComponentComponent', () => {
  let component: VillaComponentComponent;
  let fixture: ComponentFixture<VillaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
