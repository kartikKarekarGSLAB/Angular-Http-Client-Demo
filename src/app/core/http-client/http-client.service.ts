import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseBase } from './http-client.types';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  // baseURL = 'https://px.demo.extendedcaresolutions.com/v2';
  baseURL = 'http://localhost:8000/v2';
  service = '/mes';
  appConfigURL = '/apps/config';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2VtYWlsIjoiZ3Vlc3RAb2FrZ2VuLmNvbSIsInVzZXJfbmFtZSI6Imd1ZXN0Iiwic2NvcGUiOlsiY29sbGFib3JhdGlvbl9yZWFkIiwiY29sbGFib3JhdGlvbl93cml0ZSIsImxvY2F0aW9uX3JlYWQiLCJvcGVyYXRvcl9yZWFkIiwiY29uZmlnX3JlYWQiLCJzcGVlZGRpYWxfcmVhZCIsImxvY2F0aW9ucHJlZl93cml0ZSIsInR2Z3VpZGVfcmVhZCIsImNvbnRlbnRfcmVhZCJdLCJleHAiOjE2NzQ2MDQ1NzcsImF1dGhvcml0aWVzIjpbIlJPTEVfR1VFU1QiXSwianRpIjoiZGZlZGVhOWUtNjMyMC00NmEzLWI5ODEtYmM5MzUyZDU2Mzc5IiwiaWVwLXRlbmFudC1pZCI6Im9ha2dlbiIsImNsaWVudF9pZCI6Imd1ZXN0QXBwIn0.ZseeElbfAmE1wywHB6NXId8bUWLGw03QMcCimbtJnx0',
    }),
  };

  constructor(private http: HttpClient) {}

  urlBuilder = (service: string): string => {
    return '';
  };

  getPayload = (): Observable<ResponseBase<any>> => {
    const params = new HttpParams().set('locationType', 'PATIENT_ROOM');
    console.log('HttpClientService.getData Getting data from server');
    return this.http.get<ResponseBase<any>>(
      this.baseURL + this.service + this.appConfigURL,
      {
        ...this.httpOptions,
        params,
        
      }
    );
  };
}
