import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Client } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public getClients(page: number): Observable<Client[]> {
    return this.http
      .get<Client[]>(`http://localhost:5229/api/clients?page=${page}`)
      .pipe(
        map(clients => clients.map(client => this.addAvatarToClient(client)))
      );
  }

  public getClient(id: number): Observable<Client> {
    return this.http
      .get<Client>(`http://localhost:5229/api/clients/${id}`)
      .pipe(map(client => this.addAvatarToClient(client)));
  }

  public updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(
      `http://localhost:5229/api/clients/${client.id}`,
      client
    );
  }

  private addAvatarToClient(client: Client): Client {
    return {
      ...client,
      avatar: this.getRandomAvatarUrl(client.id),
    };
  }

  getRandomAvatarUrl(id: number): string {
    const avatarId = id % 100;
    return `https://randomuser.me/api/portraits/${this.randomGender()}/${avatarId}.jpg`;
  }

  private randomGender(): string {
    return Math.random() > 0.5 ? 'men' : 'women';
  }
}
