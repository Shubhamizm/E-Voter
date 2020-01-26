import { DummyAuthService } from './services/dummy-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online-VoterID';

  constructor(private dummy : DummyAuthService)
  {

  }
  
}
