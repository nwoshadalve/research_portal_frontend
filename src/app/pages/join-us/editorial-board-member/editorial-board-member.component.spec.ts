import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialBoardMemberComponent } from './editorial-board-member.component';

describe('EditorialBoardMemberComponent', () => {
  let component: EditorialBoardMemberComponent;
  let fixture: ComponentFixture<EditorialBoardMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialBoardMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorialBoardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
