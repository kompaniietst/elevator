import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[randomColor]'
})
export class RandomColorDirective {
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.background = this.getRandomColor();
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
