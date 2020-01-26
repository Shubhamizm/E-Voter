import { Appdetails } from './../../Models/ApplicationDetails';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-app',
  templateUrl: './track-app.component.html',
  styleUrls: ['./track-app.component.css']
})



export class TrackAppComponent implements OnInit {

  appdetails : Appdetails[]= [];

  constructor(private ser : UserServiceService) { }

  ngOnInit() {

    this.ser.getdetails().subscribe(

      (data:any) =>
      {
        console.log(data);
          data.forEach(element => {
            if(element.userid==JSON.parse(localStorage.getItem('userobj')).userid)
            {
              this.appdetails.push(element);
              console.log(this.appdetails[0].userid)
            }
          });
      }

      ,(error) =>
      {
        console.log(JSON.stringify(error));
      }


    );



  }

}
