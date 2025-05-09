import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedInAdvanceComponent } from './published-in-advance.component';

describe('PublishedInAdvanceComponent', () => {
  let component: PublishedInAdvanceComponent;
  let fixture: ComponentFixture<PublishedInAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedInAdvanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedInAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
