import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  showBackToTop = false;
  showContactAnimation = false;
  email = '';

  ngOnInit(): void {
    // Trigger animations when component loads
    setTimeout(() => {
      this.showContactAnimation = true;
    }, 100);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Show/hide back to top button
    this.showBackToTop = window.pageYOffset > 300;
    
    // Check if contact section is in viewport for animations
    const contactSection = document.getElementById('contact');
    if (contactSection && this.isInViewport(contactSection)) {
      this.showContactAnimation = true;
    }
  }

  isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    if (this.email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', this.email);
      // Add your newsletter subscription logic here
      alert('Thank you for subscribing to our newsletter!');
      this.email = '';
    }
  }
}