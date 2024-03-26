import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGoalFormComponent } from './app-goal-form.component';

describe('AppGoalFormComponent', () => {
  let component: AppGoalFormComponent;
  let fixture: ComponentFixture<AppGoalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGoalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
