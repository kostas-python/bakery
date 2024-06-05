import { Component } from '@angular/core';
import 'animate.css';
import { LazyLoadImageModule } from 'ng-lazyload-image';




@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [LazyLoadImageModule],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})

export class BlocksComponent {
   
}

