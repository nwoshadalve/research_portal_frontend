import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEthicsComponent } from './publication-ethics.component';

describe('PublicationEthicsComponent', () => {
  let component: PublicationEthicsComponent;
  let fixture: ComponentFixture<PublicationEthicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationEthicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
