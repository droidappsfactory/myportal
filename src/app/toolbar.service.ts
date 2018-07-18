import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  // Observable string sources
  private toogleSideNavSource = new Subject<boolean>();
  private toggleValue:boolean = false;

  private bottomSheetSource = new Subject<string>();

  // Observable string streams
  toggleSideNav$ = this.toogleSideNavSource.asObservable();

  bottomSheet$ = this.bottomSheetSource.asObservable();
  
  // Service message commands
  toggleClicked() {
    this.toggleValue = !this.toggleValue;
    this.toogleSideNavSource.next(this.toggleValue);
  }

  openBottomSheetComp(){
    this.bottomSheetSource.next('clicked');
  }


  constructor(){
    this.toogleSideNavSource.next(this.toggleValue);
  }


}
