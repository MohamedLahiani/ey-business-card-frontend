import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDisplayComponent } from '../../second-page-card-preview/second-page-preview/card-display/card-display.component';
import { QrDisplayComponent } from '../../second-page-card-preview/second-page-preview/qr-display/qr-display.component';

@Component({
  selector: 'app-second-page-preview',
  standalone: true,
  imports: [CommonModule, CardDisplayComponent, QrDisplayComponent],
  templateUrl: './second-page-preview.component.html',
  styleUrls: ['./second-page-preview.component.css']
})
export class SecondPagePreviewComponent {
  @Input() card: any;
}
