import { Directive, HostListener, HostBinding,ElementRef } from '@angular/core';

@Directive({
    selector : '[appDropdown]'
})
export class DropdownDirective{
constructor(private elref: ElementRef){

}
    @HostBinding ('class.open')  isopen= false;
    @HostListener('click') toggleopen(){
    this.isopen=!this.isopen;
}
}