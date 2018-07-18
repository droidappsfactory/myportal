import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AndroidComponent } from './android/android.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';



const appRoutes: Routes = [
  { path: 'android', component: AndroidComponent },
  { path: 'angular', component:AngularComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}