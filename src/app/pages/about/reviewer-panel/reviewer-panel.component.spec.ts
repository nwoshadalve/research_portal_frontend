import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerPanelComponent } from './reviewer-panel.component';

describe('ReviewerPanelComponent', () => {
  let component: ReviewerPanelComponent;
  let fixture: ComponentFixture<ReviewerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewerPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
