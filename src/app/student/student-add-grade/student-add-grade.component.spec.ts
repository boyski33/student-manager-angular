import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddGradeComponent } from './student-add-grade.component';

describe('StudentAddGradeComponent', () => {
  let component: StudentAddGradeComponent;
  let fixture: ComponentFixture<StudentAddGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
