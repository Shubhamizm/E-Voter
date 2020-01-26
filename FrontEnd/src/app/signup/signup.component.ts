import { Router, NavigationExtras } from '@angular/router';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MustMatch } from 'src/app/Helpers/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform : FormGroup

  constructor(private fb : FormBuilder, private ser : UserServiceService, private router : Router) { }

  ngOnInit() {

    this.signupform = this.fb.group({

        email : ['',[Validators.required, Validators.email]],
        password : ['', [Validators.required,Validators.minLength(6)]],
        ConfirmPassword : ['', Validators.required],
        fullname : ['',Validators.required]},
        {
          validator : MustMatch('password', 'ConfirmPassword')
        });

  }

  onSubmit()
  {
    let x = 
    {
      'fullname' : this.signupform.value.fullname,
      'email' : this.signupform.value.email,
      'password' : this.signupform.value.ConfirmPassword
    }

      this.ser.signup(x).subscribe(

        (data)=>
        {
          console.log(data)
            const navigationExtras: NavigationExtras = {state: {data: 'Sign Up was succesfful! You can now Login.'}};
            this.router.navigate(['/login'], navigationExtras)
            this.signupform.reset();
        }

        ,(error)=>
        {
          console.log("inside error!")
        console.log(JSON.stringify(error))
        }

      );

  }

  get f() {return this.signupform.controls;}

}
