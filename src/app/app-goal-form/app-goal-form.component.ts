import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-app-goal-form',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './app-goal-form.component.html',
  styleUrl: './app-goal-form.component.scss'
})
export class AppGoalFormComponent {
  public btnText: string = "Submit";
  public goalText: string = "";
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
