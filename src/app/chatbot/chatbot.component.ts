import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ChatMessage } from '../modal/chatmessage';
import { ChatService } from '../chat.service';

@Component({
  selector: 'chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {

  @ViewChild('chatMsgDiv') private myScrollContainer: ElementRef;


  @Input() show: boolean;
  @Output() showChanged = new EventEmitter<boolean>();

  messages: ChatMessage[] = [];

  constructor(private chatService: ChatService) {

    this.initBot();

  }

  initBot() {

    let objDate = Date.now(); 

    this.messages = [
      { name: 'Bot', data: 'Hi, How can i assist you',time:objDate },

    ]
  }

  ngOnInit() {
    this.scrollToBottom();
    console.log("show value" + this.show)
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  openChat() {
    this.show = !this.show;
    this.showChanged.emit(this.show);
    let objDate = Date.now(); 
    if (this.show) {
      this.messages = [
        { name: 'Bot', data: 'Hi, How can i assist you',time:objDate },

      ]
    }
  }

  messageEntered(searchTxt: string) {

    console.log(searchTxt)
    let objDate = Date.now();
    this.messages.push({ name: 'User', data: searchTxt,time:objDate })

    this.chatService.sendTxtToBot(searchTxt).subscribe(response => {
      console.log(response.message)
      let msg = response.message;
      let newobjDate = Date.now();
      this.messages.push({ name: 'Bot', data: msg,time:newobjDate })
      this.scrollToBottom();
    });

  }

 

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
