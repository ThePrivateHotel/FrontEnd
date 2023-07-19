import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent{

  @Input() collapsed=false;
  @Input() screenwidth=0;

  getBodyClass():string {
    let styleClass = '';
    if(this.collapsed && this.screenwidth > 768){
      styleClass = 'body-trimmed';
    }else if(!this.collapsed && this.screenwidth <= 768 && this.screenwidth > 0){
      styleClass = 'body-md-screen'
    }

  return styleClass;
  }


}
