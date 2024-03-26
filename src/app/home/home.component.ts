import {Component, Inject} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {NavComponent} from "../nav/nav.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Goal} from "../model/goal.model";
import {AppGoalListComponent} from "../app-goal-list/app-goal-list.component";
import {AppGoalFormComponent} from "../app-goal-form/app-goal-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    FooterComponent,
    NavComponent,
    FormsModule,
    NgForOf,
    AppGoalListComponent,
    AppGoalFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public name: string = "home page";
  public itemCount: number = 1;
  public items: Goal[] = [];

  constructor() {
    const defaultGoal = new Goal();
    defaultGoal.name = 'Ayoub Ellaouzi';
    this.items.push(defaultGoal);
  }

  addItem(newItem: string) {
    this.itemCount++;
    const newGoal = new Goal();
    newGoal.name = newItem;
    this.items.push(newGoal);
  }

  deleteItem(itemToDelete: string) {
    this.itemCount--;
    console.log("----" + itemToDelete);
    this.items = this.items.filter(item => item.name !== itemToDelete);
  }

}
