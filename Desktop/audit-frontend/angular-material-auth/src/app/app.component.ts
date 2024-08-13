import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';  // Import your LoginDialogComponent
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,         // Import Angular Material Button
    MatDialogModule,         // Import Angular Material Dialog
    MatFormFieldModule,      // Import Angular Material Form Field
    MatInputModule,          // Import Angular Material Input
    RegistrationDialogComponent,  // Import the standalone registration dialog component
    LoginDialogComponent        // Import the standalone login dialog component
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-auth';

  constructor(private dialog: MatDialog) {}

  openRegistrationDialog() {
    this.dialog.open(RegistrationDialogComponent);
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);  // Open the login dialog
  }
}
