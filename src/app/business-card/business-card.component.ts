import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopSectionComponent } from './components/first-page-form/top-section/top-section.component';
import { PreviewButtonComponent } from './components/first-page-form/preview-button/preview-button.component';
import { BusinessCardFormComponent } from './components/first-page-form/business-card-form/business-card-form.component';
import { PreviewButtonsComponent } from './components/second-page-card-preview/preview-buttons/preview-buttons.component';
import { SecondPagePreviewComponent } from './components/second-page-card-preview/second-page-preview/second-page-preview.component';

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

  card = {
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
    this.showPreview = true;
  }

  onGoBack() {
    this.showPreview = false;
  }

  onDownloadCard() {
    console.log('Download button clicked');
    // implement download/email/QR functionality
  }

  onSubmit() {
    console.log('Form submitted');
  }
}
