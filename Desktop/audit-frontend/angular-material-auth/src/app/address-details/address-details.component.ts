import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule
  ]
})
export class AddressDetailsComponent {
  stage: number = 3;  // Define the stage property here
  country: string = '';
  state: string = '';
  city: string = '';
  pincode: string = '';
  address: string = '';
  countries: string[] = ['Country1', 'Country2'];
  states: string[] = ['State1', 'State2'];
  cities: string[] = ['City1', 'City2'];

  onCountryChange(event: any) {
    // Update states based on selected country
  }

  onStateChange(event: any) {
    // Update cities based on selected state
  }
}
