import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-business-card-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule],
  templateUrl: './business-card-form.component.html',
  styleUrls: ['./business-card-form.component.css']
})
export class BusinessCardFormComponent {
  @Input() card: any = {};
  @Output() cardChange = new EventEmitter<any>();
  @Output() submitForm = new EventEmitter<void>();

  onInputChange() {
    this.cardChange.emit(this.card);
  }

  onSubmitForm() {
    this.submitForm.emit();
  }
}
