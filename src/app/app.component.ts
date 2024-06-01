import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/navbar/footer/footer.component';
import { BlocksComponent } from './Layout/blocks/blocks/blocks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,BlocksComponent],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'bakery';
}
