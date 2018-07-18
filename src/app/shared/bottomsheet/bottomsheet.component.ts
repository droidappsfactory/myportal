import { Component, OnInit, OnChanges } from '@angular/core';
import { MatBottomSheetRef, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { SnackbarComponent } from '../snackbar/snackbar.component';


@Component({
  selector: 'bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent {

  contactmeForm:FormGroup;

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>,private fb: FormBuilder,public snackBar: MatSnackBar) {
    this.initcontactmeForm();
  }


  initcontactmeForm (){
    this.contactmeForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      comments:''
    })
  }



  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onSubmit(){

    this.bottomSheetRef.dismiss();
    console.log("clicked"+ this.contactmeForm.value.name+this.contactmeForm.value.email+this.contactmeForm.value.comments+this.contactmeForm.valid)
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 500,
    });
   
    
  }

}
