import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qr-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qr-display.component.html',
  styleUrls: ['./qr-display.component.css']
})
export class QrDisplayComponent implements OnInit {
  @Input() card: any;
  qrUrl: string = '';

  ngOnInit(): void {
    const data = this.formatCardToVCARD();
    this.qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
  }

  formatCardToVCARD(): string {
    return `BEGIN:VCARD
VERSION:3.0
N:${this.card.lastName};${this.card.firstName}
FN:${this.card.firstName} ${this.card.lastName}
ORG:${this.card.company}
TITLE:${this.card.jobTitle}
EMAIL:${this.card.email}
TEL:${this.card.mobile}
ADR:${this.card.address}, ${this.card.city}, ${this.card.postalCode}, Tunisia
END:VCARD`;
  }
}
