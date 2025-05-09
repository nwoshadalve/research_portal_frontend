import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstructingAndIndexingComponent } from './abstructing-and-indexing.component';

describe('AbstructingAndIndexingComponent', () => {
  let component: AbstructingAndIndexingComponent;
  let fixture: ComponentFixture<AbstructingAndIndexingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstructingAndIndexingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstructingAndIndexingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
