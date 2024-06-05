import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LazyLoadImageModule],
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
  
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
