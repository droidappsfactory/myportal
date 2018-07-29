import { Component, OnInit, OnChanges } from '@angular/core';
import { MatBottomSheetRef, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit{
  ngOnInit(): void {
    this.initcontactmeForm();
  }
 

  contactmeForm:FormGroup;

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>,private fb: FormBuilder,public snackBar: MatSnackBar,
    private db: AngularFirestore) {
    
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

    this.db.collection('contactme').add({"name":this.contactmeForm.value.name,"email":this.contactmeForm.value.email,"comments":this.contactmeForm.value.comments})
   
    
  }

}
