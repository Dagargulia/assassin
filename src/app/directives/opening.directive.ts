import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpening]',
  standalone: true
})
export class OpeningDirective {
  isMobile = window.innerWidth <= 768;

  constructor(private elementRef: ElementRef) {}

  @HostBinding('style.maxWidth') elMaxWidth = this.isMobile ? '0px' : '250px';

  @HostListener('mouseenter') onHover() {
    if (!this.isMobile) this.open();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) this.close();
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    this.elMaxWidth = this.isMobile ? '0px' : '250px';
  }

  open() {
    this.elMaxWidth = this.isMobile ? '250px' : '250px';
  }

  close() {
    this.elMaxWidth = this.isMobile ? '0px' : '60px';
  }
}

