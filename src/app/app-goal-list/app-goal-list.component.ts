import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Goal} from "../model/goal.model";

@Component({
  selector: 'app-app-goal-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './app-goal-list.component.html',
  styleUrl: './app-goal-list.component.scss'
})
export class AppGoalListComponent {
  @Input() x: Goal[] = [];
  @Output() deleteItemEvent = new EventEmitter<string>();

  deleteItem(value : string | undefined) {
    console.log("+++++++++",value);
    this.deleteItemEvent.emit(value);
  }

}
