import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Email } from './Sent-mail.module';
@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @HostBinding('attr.class') cssClass = 'card mt-3';
  @Input() mail:Email;
  vis: boolean;
  col: boolean;
  

  constructor() {
      this.mail = new Email('', '', '');
      this.col = false;
      this.vis = false;
  }
espandi():boolean{
  this.vis = true
  return false
}
chiudi():boolean{
  this.vis = false
  return false
}
}
