import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBuyPageComponent } from './mobile-buy-page.component';

describe('MobileBuyPageComponent', () => {
  let component: MobileBuyPageComponent;
  let fixture: ComponentFixture<MobileBuyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBuyPageComponent]
    });
    fixture = TestBed.createComponent(MobileBuyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
