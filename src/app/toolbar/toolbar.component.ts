import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

 // sideNavToggle:boolean = false;
  constructor(private toolbarService:ToolbarService) { }

  ngOnInit() {
 //   this.toolbarService.toggleClicked(this.sideNavToggle);
  }

  toggleSideNav(){
    console.log('clicked')
  //  this.sideNavToggle = !this.sideNavToggle;
    this.toolbarService.toggleClicked();
  }

  openBottomSheet(){
    this.toolbarService.openBottomSheetComp();
  }
}
