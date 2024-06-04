import { Component } from '@angular/core';
import 'animate.css';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';




@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [AnimateOnScrollModule,],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})

export class BlocksComponent {
   
}

