import { Component } from '@angular/core';
import 'animate.css';


// Function to check if an element is in the viewport
function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let animationApplied = false;

function addAnimation(): void {
  const element = document.getElementById('animatedDiv');
  if (element && isInViewport(element) && !animationApplied) {
    element.classList.add('animate__animated', 'animate__fadeInLeft');
    animationApplied = true;
  }
}



// Event listener to trigger the addAnimation function on scroll
window.addEventListener('scroll', addAnimation);



@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})

export class BlocksComponent {

}

