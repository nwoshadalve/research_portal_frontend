import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveIssueComponent } from './archive-issue.component';

describe('ArchiveIssueComponent', () => {
  let component: ArchiveIssueComponent;
  let fixture: ComponentFixture<ArchiveIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveIssueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
