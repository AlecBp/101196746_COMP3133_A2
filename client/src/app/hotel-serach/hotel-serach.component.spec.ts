import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSerachComponent } from './hotel-serach.component';

describe('HotelSerachComponent', () => {
  let component: HotelSerachComponent;
  let fixture: ComponentFixture<HotelSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
