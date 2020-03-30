import { Directive, HostListener, HostBinding,ElementRef } from '@angular/core';

@Directive({
    selector : '[appDropdown]'
})
export class DropdownDirective{
constructor(private elref: ElementRef){

}
    @HostBinding ('class.open')  isopen= false;
    @HostListener('document:click',['$Event']) toggleopen(event:Event){
    this.isopen=!this.elref.nativeElement.contains(event.target) ? !this.isopen : false ;
}
}