import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCrossmarkPolicyComponent } from './portal-crossmark-policy.component';

describe('PortalCrossmarkPolicyComponent', () => {
  let component: PortalCrossmarkPolicyComponent;
  let fixture: ComponentFixture<PortalCrossmarkPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalCrossmarkPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalCrossmarkPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
