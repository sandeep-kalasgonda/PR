import { Component } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(private dialogRef: MatDialogRef<LoginDialogComponent>, private dialog:MatDialog) {}


  onCancel(): void {
    this.dialogRef.close(); // Close the dialog when cancel is clicked
  }

  onLogin(): void {
    // Implement login logic here
    console.log('Login button clicked');
    this.dialogRef.close(); // Close the dialog after login
  }

  openRegistration(): void {
    this.dialogRef.close(); // Close the login dialog
    this.dialog.open(RegistrationDialogComponent);
  }
}
