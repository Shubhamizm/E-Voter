import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  logout()
  {
    console.log("In logout")
    localStorage.clear();
    this.router.navigate(['/homewel'])
  }
}
