import { Component,Input} from '@angular/core';
@Component({
    selector: 'tab',
    templateUrl: 'tab.component.html'
})
export class TabComponent{
    @Input() url:Boolean=false;
    @Input() ids:String="";
    @Input() tabidx:Number=0;
    @Input() tabs:Array<Object>;
}