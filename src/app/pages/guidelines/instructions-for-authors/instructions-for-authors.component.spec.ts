import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsForAuthorsComponent } from './instructions-for-authors.component';

describe('InstructionsForAuthorsComponent', () => {
  let component: InstructionsForAuthorsComponent;
  let fixture: ComponentFixture<InstructionsForAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionsForAuthorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionsForAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
