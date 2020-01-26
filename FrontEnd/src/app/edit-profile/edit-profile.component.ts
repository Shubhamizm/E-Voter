import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../Helpers/must-match.validator';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  test : String = "Shubham"
  editform : FormGroup
  olddata: any = {};
 

  constructor(private fb : FormBuilder, private ser : UserServiceService, private router : Router) { }

  ngOnInit() {
    this.olddata = JSON.parse(localStorage.getItem('userobj'));

    this.editform = this.fb.group({

        email : [this.olddata.email,[Validators.required, Validators.email]],
        password : ["", [Validators.required,Validators.minLength(6)]],
        ConfirmPassword : ["", Validators.required],
        fullname : [this.olddata.fullname,Validators.required]},
        {
          validator : MustMatch('password', 'ConfirmPassword')
        });


        

        

  }

  get f() {return this.editform.controls;}

  onSubmit()
  {
    let x = 
    {
      'fullname' : this.editform.value.fullname,
      'email' : this.editform.value.email,
      'password' : this.editform.value.ConfirmPassword,
      'userid' : JSON.parse(localStorage.getItem('userobj')).userid,
      'role' : JSON.parse(localStorage.getItem('userobj')).role
    }
    console.log(x);

    this.ser.editprofile(x).subscribe(

        (data)=>
        {
          const navigationExtras: NavigationExtras = {state: {data: 'Your password and details are changed! Please login again.'}};
          this.router.navigate(['/login'], navigationExtras)
          this.editform.reset();
          console.log(data)
        }

      ,(error)=>
      {
        console.log(JSON.stringify(error))
      }


    );

  }


}
