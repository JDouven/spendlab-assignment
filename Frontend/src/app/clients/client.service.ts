import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public getClients(page: number): Observable<Client[]> {
    return this.http.get<Client[]>(
      `http://localhost:5229/api/clients?page=${page}`
    );
  }
}
