import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  message: string = '';
  messages: string[] = [];

  sendMessage() {
    if (this.message.trim() !== '') {
      this.messages.push(this.message);
      this.message = '';
    }
  }
}
