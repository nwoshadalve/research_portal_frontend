import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleProcessingFeeComponent } from './article-processing-fee.component';

describe('ArticleProcessingFeeComponent', () => {
  let component: ArticleProcessingFeeComponent;
  let fixture: ComponentFixture<ArticleProcessingFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleProcessingFeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleProcessingFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
