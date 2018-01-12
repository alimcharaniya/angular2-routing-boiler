import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about-component/about-component.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';




export const firebaseConfig = {
    //insert firebase credeints
};

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    MentorsComponent,
    ContactComponent,
    AboutComponent,
    FormsComponent,
    ProjectsComponent,
    HomeComponent,
    MembersComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'members', component: MembersComponent},
      {path: 'mentors', component: MentorsComponent},
      {path: 'teams', component: TeamsComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
