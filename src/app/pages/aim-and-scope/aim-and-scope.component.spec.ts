import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimAndScopeComponent } from './aim-and-scope.component';

describe('AimAndScopeComponent', () => {
  let component: AimAndScopeComponent;
  let fixture: ComponentFixture<AimAndScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimAndScopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimAndScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
