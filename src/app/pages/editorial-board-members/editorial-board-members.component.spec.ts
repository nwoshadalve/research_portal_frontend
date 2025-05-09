import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialBoardMembersComponent } from './editorial-board-members.component';

describe('EditorialBoardMembersComponent', () => {
  let component: EditorialBoardMembersComponent;
  let fixture: ComponentFixture<EditorialBoardMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialBoardMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorialBoardMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
