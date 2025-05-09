import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackManuscriptStatusComponent } from './track-manuscript-status.component';

describe('TrackManuscriptStatusComponent', () => {
  let component: TrackManuscriptStatusComponent;
  let fixture: ComponentFixture<TrackManuscriptStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackManuscriptStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackManuscriptStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
