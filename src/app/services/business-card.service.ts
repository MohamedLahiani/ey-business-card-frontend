import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BusinessCard {
  id?: number;
  uuid?: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile?: string;
  job_title?: string;
  department?: string;
  company_name?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  created_at?: string;
  updated_at?: string;
  qr_code?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BusinessCardService {
  private apiUrl = 'http://localhost:3000/api/business-card';

  constructor(private http: HttpClient) {}

  createBusinessCard(card: BusinessCard): Observable<BusinessCard> {
    return this.http.post<BusinessCard>(this.apiUrl, card);
  }

  getBusinessCard(id: number): Observable<BusinessCard> {
    return this.http.get<BusinessCard>(`${this.apiUrl}/${id}`);
  }

  updateBusinessCard(id: number, card: Partial<BusinessCard>): Observable<BusinessCard> {
    return this.http.put<BusinessCard>(`${this.apiUrl}/${id}`, card);
  }

  getQrCode(id: number): Observable<{ qr_code: string }> {
    return this.http.get<{ qr_code: string }>(`${this.apiUrl}/${id}/qrcode`);
  }

  getVCard(uuid: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/vcard/${uuid}`, { responseType: 'blob' });
  }
}