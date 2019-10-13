import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
contacts = [
  {name:'test1',address:'test1',mobile:'test1',work:'test1',home:'test1',email:'test1',github:'test1'},{name:'test2',address:'test2',mobile:'test2',work:'test2',home:'test2',email:'test2',github:'test2'}
]
  constructor() { }

  ngOnInit() {
  }

}
