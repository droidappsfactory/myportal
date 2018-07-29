import { Component, ViewEncapsulation } from '@angular/core';
import { ChatMessage } from './modal/chatmessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  show:boolean=true;
  messages:ChatMessage[]=[];

  constructor(){  
  }

  openChat(value:boolean){
    console.log("value "+value)
    this.show = !this.show;
  }
}
