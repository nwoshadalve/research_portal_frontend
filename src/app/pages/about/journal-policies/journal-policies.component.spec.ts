import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalPoliciesComponent } from './journal-policies.component';

describe('JournalPoliciesComponent', () => {
  let component: JournalPoliciesComponent;
  let fixture: ComponentFixture<JournalPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
