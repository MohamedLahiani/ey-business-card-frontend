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

  uploadedLogo: string | ArrayBuffer | null = null; 
  uploadedLogoName: string | null = null; 

  
  onLogoChange(event: any): void {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedLogo = e.target.result; 
        this.uploadedLogoName = file.name; 
        this.card.logo = this.uploadedLogo;  
        this.cardChange.emit(this.card);  
      };
      reader.readAsDataURL(file); 
    }
  }
}
