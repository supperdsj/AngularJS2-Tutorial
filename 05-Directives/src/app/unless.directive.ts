import { Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {
  @Input() set dirUnless(condition:boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef:TemplateRef,private vcRef:ViewContainerRef) {

  }

}
