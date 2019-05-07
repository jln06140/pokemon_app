import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[pkmnBorderCard]' })
export class BorderCardDirective {

    @Input('pkmnBorderCard') borderColor: string;

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    private defaultHeigh: number = 180;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeigh);
        //this.setWidth(200);
    }


    @HostListener('mouseenter') onmouseenter() {
        console.log(this.borderColor)
        this.setBorder(this.borderColor || this.defaultColor );
    }

    @HostListener('mouseleave') onmouseleave() {
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        let border = 'solid 4px' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

    private setWidth(width: number) {
        this.el.nativeElement.style.width = width + 'px';
    }

}