import { Appdetails } from './../../Models/ApplicationDetails';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-review-app',
  templateUrl: './review-app.component.html',
  styleUrls: ['./review-app.component.css']
})
export class ReviewAppComponent implements OnInit {

  userdata : any = {};
  Appdeatils : Appdetails[];
  image = null;

  constructor( private modalService: NgbModal, private ser : UserServiceService) { }

  ngOnInit() {


    this.ser.getdetails().subscribe(

      (data:any)=>
      {
        this.Appdeatils = data;
    
      }

      ,(error)=>
      {
        console.log(JSON.stringify(error))
      }

    );

  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  enableEdit = false;
  enableEditIndex = null;

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(e,i);
  }

  cancel() {
    console.log('cancel');
    this.enableEditIndex = null;
  }

  saveSegment(item : any) {
    this.enableEditIndex = null;
    const appdetailss = {} as Appdetails
    appdetailss.date = item.date;
    appdetailss.appnumber = item.appnumber;
    appdetailss.comment = item.comment;
    appdetailss.userid = item.userid;
    appdetailss.status = item.status;
    console.log(appdetailss);
    this.ser.updateApplication(appdetailss).subscribe(

      (data:any)=>
      {
        console.log(data)
      }
      ,(error)=>
      {
          console.log(error)
      }
    );
  }

  getdata(item: any)
  {
    let x = Number(item.appnumber)
    this.ser.getdata(x).subscribe(

      (data:any)=>
      {
        this.image = data.aadharimg
        this.userdata = data;
    
      }

      ,(error)=>
      {
        console.log(JSON.stringify(error))
      }

    );
  }
}
