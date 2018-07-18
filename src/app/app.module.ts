import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule,MatSidenavModule,MatListModule,MatButtonModule,MatIconModule,MatCardModule,MatTabsModule
,MatBottomSheetModule,MatFormFieldModule,MatInputModule,MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactmeComponent } from './contactme/contactme.component';
import { AndroidComponent } from './android/android.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AndroidexpComponent } from './android/androidexp/androidexp.component';
import { AndroidtopicsComponent } from './android/androidtopics/androidtopics.component';
import { AndroidrolesComponent } from './android/androidroles/androidroles.component';
import { AngularComponent } from './angular/angular.component';
import { AndroidscreensComponent } from './android/androidscreens/androidscreens.component';
import { ChatboxComponent } from './shared/chatbox/chatbox.component';
import { BottomsheetComponent } from './shared/bottomsheet/bottomsheet.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    ContactmeComponent,
    AndroidComponent,
    PagenotfoundComponent,
    HomeComponent,
    AndroidexpComponent,
    AndroidtopicsComponent,
    AndroidrolesComponent,
    AngularComponent,
    AndroidscreensComponent,
    ChatboxComponent,
    BottomsheetComponent,
    SnackbarComponent
  ],
  imports: [
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents:[BottomsheetComponent,SnackbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
