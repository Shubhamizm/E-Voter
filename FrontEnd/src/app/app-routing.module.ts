import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RolecheckerService } from './services/rolechecker.service';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DummyAuthService } from './services/dummy-auth.service';
import { AboutComponent } from './about/about.component';
import { TrackAppComponent } from './track-app/track-app.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { RouteguardService } from './services/routeguard.service';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { appInjector } from 'E:/Online Voter/Online-VoterID/src/main';
import { ReviewAppComponent } from './review-app/review-app.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

// const userService =  appInjector.get(DummyAuthService);

const routes: Routes = [

  // {path:'', pathMatch: 'full', component: HomeWelcomeComponent},
  // {path:'', pathMatch: 'full', component: HomeUserComponent, canActivate : [RouteguardService]},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'application', component: ApplicationFormComponent, canActivate :[RouteguardService]},
  {path:'faq', component: FaqsComponent, canActivate : [RouteguardService]},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'homeuser', component: HomeUserComponent, canActivate : [RouteguardService]},
  {path:'edit', component: EditProfileComponent, canActivate : [RouteguardService]},
  {path:'homewel', component: HomeWelcomeComponent},
  {path:'track', component: TrackAppComponent, canActivate : [RouteguardService]},
  {path:'review', component: ReviewAppComponent, canActivate : [RouteguardService, RolecheckerService]},
   {path:'admin', component: HomeAdminComponent, canActivate : [RouteguardService, RolecheckerService]},

  {
    path: '' ,
    pathMatch : 'full',
    component: (() => {
      return !(localStorage.getItem('userobj')===null)? ((JSON.parse(localStorage.getItem('userobj')).role==="admin")? HomeAdminComponent : HomeUserComponent) : HomeWelcomeComponent;
    })()
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DummyAuthService],
})
export class AppRoutingModule {
  

 }
