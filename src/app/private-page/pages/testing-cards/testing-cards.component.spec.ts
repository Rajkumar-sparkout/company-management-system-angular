import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingCardsComponent } from './testing-cards.component';

describe('TestingCardsComponent', () => {
  let component: TestingCardsComponent;
  let fixture: ComponentFixture<TestingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
