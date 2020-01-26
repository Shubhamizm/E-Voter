import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  username : String

  constructor() { }

  ngOnInit() {

      var x = JSON.parse(localStorage.getItem('userobj'))
      this.username = x.fullname;

  }

}
