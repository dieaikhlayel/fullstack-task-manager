import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(path: string, token?: string) {
    const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
    return this.http.get(`${this.baseUrl}${path}`, { headers });
  }

  post(path: string, body: any, token?: string) {
    const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
    return this.http.post(`${this.baseUrl}${path}`, body, { headers });
  }

  put(path: string, body: any, token?: string) {
    const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
    return this.http.put(`${this.baseUrl}${path}`, body, { headers });
  }

  delete(path: string, token?: string) {
    const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
    return this.http.delete(`${this.baseUrl}${path}`, { headers });
  }
}
