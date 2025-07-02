import { Component, OnInit } from '@angular/core'; // ✅ Add OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopSectionComponent } from './components/first-page-form/top-section/top-section.component';
import { PreviewButtonComponent } from './components/first-page-form/preview-button/preview-button.component';
import { BusinessCardFormComponent } from './components/first-page-form/business-card-form/business-card-form.component';
import { PreviewButtonsComponent } from './components/second-page-card-preview/preview-buttons/preview-buttons.component';
import { SecondPagePreviewComponent } from './components/second-page-card-preview/second-page-preview/second-page-preview.component';
import { BusinessCardService } from '../services/business-card.service';
import { HttpClient } from '@angular/common/http'; // ✅ Required for backend call
import { NavbarComponent } from './components/navbar/navbar.component'; 

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
    NavbarComponent, 
    SecondPagePreviewComponent
  ],
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit { // ✅ Add OnInit

  showPreview = false;

  constructor(
    private businessCardService: BusinessCardService,
    private http: HttpClient // ✅ Inject HttpClient
  ) {}

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

 ngOnInit(): void {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user?.email) {
    const encodedEmail = encodeURIComponent(user.email); 

    this.http.get<any>(`http://localhost:3000/api/business-card/${encodedEmail}`)
      .subscribe({
        next: (data) => {
          this.card = {
            firstName: data.first_name || '',
            lastName: data.last_name || '',
            email: data.email || '',
            mobile: data.mobile || '',
            company: data.company_name || '',
            jobTitle: data.job_title || '',
            department: data.department || '',
            address: data.address || '',
            city: data.city || '',
            postalCode: data.postal_code || '',
            jobPhone: data.job_phone || ''
          };
        },
        error: (err) => console.error('Failed to fetch user card:', err)
      });
  }
}


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
