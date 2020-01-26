import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DummyAuthService } from '../services/dummy-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup
  error : boolean = false
  msg : String
  success : boolean = false
  constructor(private router : Router, private  dummy : DummyAuthService, private route : ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation.extras.state)
    {
    const state = navigation.extras.state as {data: string};
    console.log(state)
    this.success=true;
    this.msg=state.data;
    }

   }

  ngOnInit() {


    this.loginform = new FormGroup({
      email : new FormControl('',[Validators.email,Validators.required]),
      password : new FormControl('',Validators.required)
      
    });
  }

  onSubmit() : void {



    this.dummy.autheticate(this.loginform.value.email, this.loginform.value.password).subscribe(

      (data:any)=>
      {
        console.log(data)

        if(data!=null)
        {
        
        if(data.role=="admin")
        {
          localStorage.setItem('userobj',JSON.stringify(data))
          this.router.navigate(['/admin'])
        }
        else
        {
          localStorage.setItem('userobj',JSON.stringify(data))
          this.router.navigate(['/homeuser'])
        }
      }
      else
      {
        this.success=false;
        this.error=true;
        this.msg="Invalid Credentails";
      }
    });
    }
}
