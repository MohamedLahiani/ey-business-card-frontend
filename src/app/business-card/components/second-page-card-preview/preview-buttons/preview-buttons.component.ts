import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-preview-buttons',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './preview-buttons.component.html',
  styleUrls: ['./preview-buttons.component.css']
})
export class PreviewButtonsComponent {
  @Output() goBack = new EventEmitter<void>();
  @Output() download = new EventEmitter<void>();
}
