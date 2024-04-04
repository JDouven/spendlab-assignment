import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Client } from '../../models';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './client-card.component.html',
})
export class ClientCardComponent {
  @Input({ required: true }) client!: Client;

  getClientFullName(client: Client): string {
    return `${client.name} ${client.surname}`;
  }

  getRandomAvatarUrl(id: number): string {
    const avatarId = id % 100;
    return `https://randomuser.me/api/portraits/${this.randomGender()}/${avatarId}.jpg`;
  }

  private randomGender(): string {
    return Math.random() > 0.5 ? 'men' : 'women';
  }
}
