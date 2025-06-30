import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopSectionComponent } from './components/first-page-form/top-section/top-section.component';
import { PreviewButtonComponent } from './components/first-page-form/preview-button/preview-button.component';
import { BusinessCardFormComponent } from './components/first-page-form/business-card-form/business-card-form.component';
import { PreviewButtonsComponent } from './components/second-page-card-preview/preview-buttons/preview-buttons.component';
import { SecondPagePreviewComponent } from './components/second-page-card-preview/second-page-preview/second-page-preview.component';
import { BusinessCardService } from '../services/business-card.service';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TopSectionComponent,
    PreviewButtonComponent,
    BusinessCardFormComponent,
    PreviewButtonsComponent,
    SecondPagePreviewComponent
  ],
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {
  showPreview = false;

  constructor(private businessCardService: BusinessCardService) {}

  card: {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile?: string;
    company?: string;
    jobTitle?: string;
    department?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    jobPhone?: string;
  } = {
    firstName: 'mohamed',
    lastName: 'lahiani',
    email: 'mohamed.lahiani@ensi-uma.tn',
    mobile: '+21644412115',
    company: '+21644412115',
    jobTitle: 'stagiaire',
    department: 'consulting',
    address: 'tunis',
    city: 'tunis',
    postalCode: '1030',
    jobPhone: '0123456789',
  };

  onPreviewClick() {
    const payload = {
      first_name: this.card.firstName,
      last_name: this.card.lastName,
      email: this.card.email,
      mobile: this.card.mobile,
      job_title: this.card.jobTitle,
      department: this.card.department,
    };

    this.businessCardService.createBusinessCard(payload as any).subscribe(
      (response) => {
        this.card.id = response.id;
        this.showPreview = true;
      },
      (error) => {
        console.error('Error creating card:', error);
      }
    );
  }

  onGoBack() {
    this.showPreview = false;
  }

  onDownloadCard() {
    const id = this.card.id;
    if (!id) return;

    // Download VCF
    this.businessCardService.getVCard(id.toString()).subscribe((blob: Blob) => {
      const vcfUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = vcfUrl;
      a.download = 'business_card.vcf';
      a.click();
      window.URL.revokeObjectURL(vcfUrl);
    });

    // Download QR
    this.businessCardService.getQrCode(id).subscribe((res) => {
      const a = document.createElement('a');
      a.href = res.qr_code;
      a.download = 'qr_code.png';
      a.click();
    });

    this.businessCardService.sendEmailWithAttachments(id).subscribe({
      next: () => console.log('✅ Email sent'),
      error: (err) => console.error('❌ Failed to send email', err)
    });


  }

  onSubmit() {
    console.log('Form submitted');
  }
}
