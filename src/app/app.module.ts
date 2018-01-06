import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// firebasse
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { environment } from '../environments/environment';
import { CoursesComponent } from './courses/courses.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { Login2Component } from './login2/login2.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemService } from './services/item.service';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListService } from './services/list/list.service';



//

@NgModule({
  declarations: [
    AppComponent, SlideComponent, FooterComponent, routingComponents, CoursesComponent, LoginComponent, EmailComponent, SignupComponent, MembersComponent, Login2Component, LoadingSpinnerComponent, ItemsComponent, AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, ItemService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

