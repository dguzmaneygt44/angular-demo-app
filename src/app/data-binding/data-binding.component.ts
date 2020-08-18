import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userNameIsNotEmpty = false;
  username = '';

  constructor() { 

  }

  ngOnInit(): void {
  }

  onResetUserName() {
    this.username = '';
    this.userNameIsNotEmpty = false;
  }

  onSetUserName(event: Event) {
    this.username != "" ? this.userNameIsNotEmpty = true : this.userNameIsNotEmpty = false;
  }

}
