import { DummyAuthService } from './services/dummy-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule,
  MatToolbarModule, MatIconModule, MatListModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { FaqsComponent } from './faqs/faqs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TrackAppComponent } from './track-app/track-app.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { AboutComponent } from './about/about.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { ReviewAppComponent } from './review-app/review-app.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeAdminComponent } from './home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ApplicationFormComponent,
    SidenavComponent,
    UserdashboardComponent,
    FaqsComponent,
    WelcomeComponent,
    ContactComponent,
    EditProfileComponent,
    TrackAppComponent,
    HomeWelcomeComponent,
    HomeUserComponent,
    AboutComponent,
    AdminSidenavComponent,
    ReviewAppComponent,
    AdmindashboardComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [DummyAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
