import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRightComponent } from './banner-right.component';

describe('BannerRightComponent', () => {
  let component: BannerRightComponent;
  let fixture: ComponentFixture<BannerRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
