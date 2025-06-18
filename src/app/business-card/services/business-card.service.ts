import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessCard } from '../models/business-card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessCardService {
  private apiUrl = 'http://localhost:3000/api/card'; // <-- adapte cette URL selon ton backend

  constructor(private http: HttpClient) {}

  getCard(): Observable<BusinessCard> {
    return this.http.get<BusinessCard>(this.apiUrl);
  }

  saveCard(card: BusinessCard): Observable<BusinessCard> {
    return this.http.post<BusinessCard>(this.apiUrl, card);
  }
}
