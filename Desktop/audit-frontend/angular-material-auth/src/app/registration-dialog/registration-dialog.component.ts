import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { OrganizationDetailsComponent } from '../organization-details/organization-details.component';
import { AddressDetailsComponent } from '../address-details/address-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    BasicDetailsComponent,
    OrganizationDetailsComponent,
    AddressDetailsComponent
  ],
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent {
  stage = 1;  // Current stage of the form

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;

  constructor(private dialogRef: MatDialogRef<RegistrationDialogComponent>) {}

  loadComponent() {
    let component: any;


    switch (this.stage) {
      case 1:
        component = BasicDetailsComponent;
        break;
      case 2:
        component = OrganizationDetailsComponent;
        break;
      case 3:
        component = AddressDetailsComponent;
        break;
    }

    if (component) {
      this.dynamicComponent.clear();
      this.dynamicComponent.createComponent(component);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  nextStage() {
    if (this.stage < 3) {
      this.stage++;
      this.loadComponent();
    }
  }

  previousStage() {
    if (this.stage > 1) {
      this.stage--;
      this.loadComponent();
    }
  }

  onRegister() {


    // Handle registration logic here

  }

  openLogin() {
    // Open login dialog or navigate to login page
  }
}
