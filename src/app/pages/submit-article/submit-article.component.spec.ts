import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitArticleComponent } from './submit-article.component';

describe('SubmitArticleComponent', () => {
  let component: SubmitArticleComponent;
  let fixture: ComponentFixture<SubmitArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
