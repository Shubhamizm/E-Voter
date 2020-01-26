import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout()
  {
    console.log("In logout")
    localStorage.clear();
    this.router.navigate(['/homewel'])
  }
}
