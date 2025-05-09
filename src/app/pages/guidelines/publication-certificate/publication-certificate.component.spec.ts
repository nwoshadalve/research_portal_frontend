import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCertificateComponent } from './publication-certificate.component';

describe('PublicationCertificateComponent', () => {
  let component: PublicationCertificateComponent;
  let fixture: ComponentFixture<PublicationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationCertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
