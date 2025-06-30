import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessCard } from '../business-card/models/business-card.model';

@Injectable({
  providedIn: 'root',
})
export class BusinessCardService {
  private apiUrl = 'http://localhost:3000/api/business-card';

  constructor(private http: HttpClient ,) {}

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

  getVCard(id: string): Observable<Blob> {
  const url = `http://localhost:3000/api/business-card/${id}/download-vcard`; // ✅ correct route
  return this.http.get(url, { responseType: 'blob' });
  }

}
