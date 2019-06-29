import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-heading-message',
  templateUrl: './heading-message.component.html',
  styleUrls: ['./heading-message.component.css']
})
export class HeadingMessageComponent implements OnInit {

  subscription: Subscription;

    constructor(private messageService: MessageService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => { this.passedmsg = message; });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
  passedmsg:string;
  ngOnInit() {
  }

}