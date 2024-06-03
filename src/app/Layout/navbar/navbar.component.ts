import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollToBlock4() {
    const block4 = document.getElementById('block4');
    if (block4) {
      block4.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact() {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
