import { Component, OnInit } from '@angular/core';
import { Links } from './links';
import { ILink } from './ilink';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  links: ILink[];


  ngOnInit() {
    this.links = Links;

  }

}
