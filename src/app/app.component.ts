
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../All-Components/navbar/navbar.component';
import { FooterComponent } from '../All-Components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
