import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent {
  @Input() card: any;
  @Output() cardChange = new EventEmitter<any>();

  uploadedLogo: string | ArrayBuffer | null = null; // Variable to store the uploaded logo
  uploadedLogoName: string | null = null; // Store the name of the uploaded logo

  // Handle the logo change when a new file is selected
  onLogoChange(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedLogo = e.target.result; // Save the uploaded logo as a base64 string
        this.uploadedLogoName = file.name; // Save the file name
        this.card.logo = this.uploadedLogo;  // Update the card with the new logo
        this.cardChange.emit(this.card);  // Emit the change to the parent component
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }
}
