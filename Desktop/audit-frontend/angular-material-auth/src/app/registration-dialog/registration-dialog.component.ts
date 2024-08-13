import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-registration-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent {

  constructor(private dialogRef: MatDialogRef<RegistrationDialogComponent>, private dialog:MatDialog) {}


  

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog when cancel is clicked
  }

  onRegister(): void {
    // Implement registration logic here
    console.log('Register button clicked');
    this.dialogRef.close(); // Close the dialog after registration
  }

  openLogin(): void {
    this.dialogRef.close(); // Close the registration dialog
    this.dialog.open(LoginDialogComponent); // Open login dialog
    
  }
}
