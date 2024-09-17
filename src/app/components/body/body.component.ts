import { Component, OnInit } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  ngOnInit(): void {
    const options: TypedOptions = {
      strings: [`<span class="zain-bold text-8xl">hi, it's <span class="faded-text font-bold">luis!</span></span>`],
      contentType: 'html',
      typeSpeed: 50,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };
    
    const typed = new Typed('.typed-element', options);
  }
}
