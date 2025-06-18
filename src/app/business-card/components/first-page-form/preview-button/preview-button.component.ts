import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-preview-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './preview-button.component.html',
  styleUrls: ['./preview-button.component.css']
})
export class PreviewButtonComponent {
  @Output() preview = new EventEmitter<void>();
}
