import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarService } from '../toolbar.service';
import { Subscription } from 'rxjs';
import { SideNavItem } from '../modal/sideNavItem';
import { MatBottomSheet} from '@angular/material';
import { BottomsheetComponent } from '../shared/bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  sideNavItems: SideNavItem[] = [];
  show:boolean = false;

  ngOnInit(): void {
    this.sideNavItems = [{
      label: 'Home', link: '',icon :'home'
    }, {
      label: 'Android', link: 'android',icon :'home'
    },{
      label: 'Angular', link: 'angular',icon :'home'
    },{
      label: 'MEAN Stack', link: 'meanstack',icon :''
    }]
  }

  subscription: Subscription;
  bottomSheetSubscription: Subscription;
  mobileQuery: MediaQueryList;
  sideNavToggle: boolean;

  // @ViewChild('snav') sideNavBar: ElementRef;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private toolbarService: ToolbarService,
     private router: Router,private bottomSheet: MatBottomSheet) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.subscription = this.toolbarService.toggleSideNav$.subscribe(toggleValue => {
      this.sideNavToggle = toggleValue;
      //   this.sideNavBar.nativeElement.toggle();
    })

    this.bottomSheetSubscription = this.toolbarService.bottomSheet$.subscribe(value=>{
      this.openBottomSheet();
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
    this.bottomSheetSubscription.unsubscribe();
  }


  closeBackDrop() {
    this.toolbarService.toggleClicked();
  }


  navItemClicked(sideNavName: string) {
    this.router.navigateByUrl(sideNavName)
    this.toolbarService.toggleClicked();
  }

  toggleChatBox(){
    this.show = !this.show;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomsheetComponent);
  }
}
