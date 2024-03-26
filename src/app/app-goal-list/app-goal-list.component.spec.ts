import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGoalListComponent } from './app-goal-list.component';

describe('AppGoalListComponent', () => {
  let component: AppGoalListComponent;
  let fixture: ComponentFixture<AppGoalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGoalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
