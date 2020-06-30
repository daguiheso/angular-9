import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  @Input() appMyDirective: boolean;
  @Input() color: boolean;

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  ngOnInit() {
    if (this.appMyDirective) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }

  hover(value: boolean) {
    this.renderer.setStyle(this.el.nativeElement, 'color', value ? 'red' : '');
  }

}
