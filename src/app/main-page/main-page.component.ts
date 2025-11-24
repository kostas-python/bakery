// main-page.component.ts
import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {
  
  // Bread products data
  breads = [
    {
      name: 'White Bread',
      description: 'A timeless classic, our white bread features an impossibly soft crumb and delicate flavor, perfect for elevating any meal.',
      price: 4.50,
      image: '/assets/ghgh.jpg'
    },
    {
      name: 'Farming Bread',
      description: 'Rustic and wholesome, embodying centuries of countryside tradition with locally sourced grains.',
      price: 5.50,
      image: '/assets/rre.jpg'
    },
    {
      name: 'Artisan Loaf',
      description: 'Our signature loaf combines comfort with sophistication, featuring a golden crust and tender interior.',
      price: 6.00,
      image: '/assets/trrt.jpg'
    },
    {
      name: 'Sourdough',
      description: '24-hour fermented perfection with complex flavors and our signature tangy notes.',
      price: 7.50,
      image: '/assets/j.jpg'
    }
  ];

  // Menu items data
  menuItems = [
    { name: 'Classic Baguette', description: 'Unbleached organic wheat flour, whole rye flour, water, sea salt, yeast', price: 3.50 },
    { name: 'Sourdough Baguette', description: 'Naturally leavened using our Five Points Levain, with superior crust and chew', price: 4.50 },
    { name: 'Pecan Raisin', description: 'French Country dough with Georgia pecans and plump Thompson raisins', price: 8.00 },
    { name: 'Everyday French', description: 'Classic table loaf using our signature baguette dough', price: 5.00 },
    { name: 'Multigrain', description: 'Millet, quinoa, oats, flax, and sunflower seeds in French Country base', price: 7.50 },
    { name: 'Danish Rye', description: 'Whole rye, cracked berries, pumpkin seeds, and barley malt syrup', price: 9.00 },
    { name: 'Levain', description: 'Our signature naturally leavened bread with complex flavor profile', price: 6.50 },
    { name: 'Ciabatta', description: 'Italian-style with open crumb, perfect for sandwiches', price: 5.50 },
    { name: 'Black Currant Special', description: 'Sourdough rye studded with dried black currants', price: 10.00 }
  ];

  // Testimonials data
  testimonials = [
    {
      name: 'Celia Almeda',
      role: 'Food Critic',
      text: 'The attention to detail and genuine care shown by the staff created an unforgettable experience. Truly exceptional service.'
    },
    {
      name: 'Frank Kinney',
      role: 'Executive Chef',
      text: 'The exquisite array of artisanal breads and seamless service make this bakery my go-to for all special occasions.'
    },
    {
      name: 'Sam Perry',
      role: 'Restaurant Owner',
      text: 'The quality surpassed my highest expectations. I recommend this establishment to anyone seeking authentic artisanal breads.'
    },
    {
      name: 'Mary Hudson',
      role: 'Culinary Artist',
      text: 'The meticulous attention to detail and premium ingredients create an unparalleled bakery experience.'
    }
  ];

  // Animation states
  showHero = false;
  showBreads = false;
  showIngredients = false;
  showMenu = false;
  showTestimonials = false;

  constructor() { }

  ngOnInit(): void {
    // Trigger initial animations
    setTimeout(() => {
      this.showHero = true;
    }, 100);
    
    // Initialize scroll animations
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
    this.updateParallax();
  }

  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    // Check if sections are in viewport
    const breadsSection = document.getElementById('breads-section');
    if (breadsSection && this.isInViewport(breadsSection)) {
      this.showBreads = true;
    }
    
    const ingredientsSection = document.getElementById('ingredients-section');
    if (ingredientsSection && this.isInViewport(ingredientsSection)) {
      this.showIngredients = true;
    }
    
    const menuSection = document.getElementById('menu-section');
    if (menuSection && this.isInViewport(menuSection)) {
      this.showMenu = true;
    }
    
    const testimonialsSection = document.getElementById('testimonials-section');
    if (testimonialsSection && this.isInViewport(testimonialsSection)) {
      this.showTestimonials = true;
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

  updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element: any) => {
      const speed = element.dataset.speed || 0.5;
      element.style.backgroundPositionY = -(scrolled * speed) + 'px';
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}