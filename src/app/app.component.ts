import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent, NavComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formation-app';
}
