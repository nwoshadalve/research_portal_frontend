import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedJournalComponent } from './approved-journal.component';

describe('ApprovedJournalComponent', () => {
  let component: ApprovedJournalComponent;
  let fixture: ComponentFixture<ApprovedJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedJournalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
