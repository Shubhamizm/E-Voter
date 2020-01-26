import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform : FormGroup
  hasmsg : boolean = false;
  msg : String

  constructor(private fb : FormBuilder) { }

  ngOnInit() {

    this.contactform = this.fb.group({

      name : [],
      email : [],
      query : []


    });
  }

  onSubmit()
  {
    console.log(this.contactform.value)
    this.hasmsg=true;
    this.msg = "Thank you for contacting us, we will get back to you!"
    this.contactform.reset
  }

}
