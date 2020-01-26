import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  closeResult: string;
  appdata : FormGroup;
  selectedfile = null;
  fileupload : File = null;
  success : boolean = false;
  public userfile : any = File;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private ser: UserServiceService) { }

  ngOnInit() {


    this.appdata = this.fb.group({
      fullname : ['', Validators.required],
      fathername : ['', Validators.required],
      mothername : ['',Validators.required],
      address : ['',Validators.required],
      aadhar : ['',Validators.required],
      aadharimg : [],
      userid : [JSON.parse(localStorage.getItem('userobj')).userid]


    });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
    console.log(this.appdata.value.fullname)
  }

  onSubmit()
  {
    console.log(this.appdata.value)
    console.log(this.appdata.value.userid)
    const user = this.appdata.value
    const formdata = new FormData();
    formdata.append('user', JSON.stringify(user))
    formdata.append('file', this.userfile)
    this.ser.add(formdata).subscribe(

      (data:any)=>
      {
        console.log(data.text)
        this.success=true;
        this.appdata.reset();
        console.log(this.success)
      }

      ,(error) =>
      {
        console.log(JSON.stringify(error))
      }

    );
  }

  onFileSelected(event)
  {
      this.selectedfile = event.target.files[0];
      const file = event.target.files[0];
      this.userfile = file;
      console.log(this.appdata.value.aadharimg)
      console.log(this.selectedfile)
      this.fileupload = event.target.files[0];
      this.appdata.setValue=event.target.files[0]
      var reader = new FileReader();
      reader.onload = (event:any)=>
      {
        this.selectedfile = event.target.result;
      }
      reader.readAsDataURL(this.fileupload);
  }

  get f() {return this.appdata.controls;}
}
